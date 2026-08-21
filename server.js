// Carrega as variáveis de ambiente ANTES de qualquer outra coisa
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const conexao = require("./db.js");

// Cria a instância do servidor Express
const app = express();

// Lista de origens permitidas
const listOrigins = [
    "http://localhost:8081",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
    "https://Dudadesa.github.io"
];

app.use(cors({
    origin: listOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Configurações da API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração da sessão
const sessionConfig = {
    // Se SESSION_SECRET existir no .env, usa ele.
    // Se não existir, usa esse segredo apenas para desenvolvimento local.
    secret: process.env.SESSION_SECRET || "segredo-cafe-central-local",
    resave: false,
    saveUninitialized: false,
    name: "cafecentral.sid",

    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60
    }
};

// Ambiente local ou produção
if (process.env.NODE_ENV === "production") {

    app.set("trust proxy", 1);

    sessionConfig.cookie.sameSite = "none";
    sessionConfig.cookie.secure = true;

} else {

    sessionConfig.cookie.sameSite = "lax";
    sessionConfig.cookie.secure = false;
}

app.use(session(sessionConfig));


// ==========================================
// ROTA PRINCIPAL
// ==========================================

app.get("/", (req, res) => {
    res.send("API TechEduca Mobile funcionando");
});


// ==========================================
// ROTA DE CADASTRO
// ==========================================

app.post("/cadastro", async (req, res) => {

    try {

        const { nome, email, senha } = req.body;

        console.log("Dados recebidos no cadastro:", req.body);

        // Verifica campos obrigatórios
        if (!nome || !email || !senha) {
            return res.status(400).json({
                erro: "Preencha todos os campos"
            });
        }

        // Verifica se o e-mail já existe
        const [rows] = await conexao.execute(
            "SELECT id FROM tb_usuario WHERE email = ?",
            [email]
        );

        if (rows.length > 0) {
            return res.status(409).json({
                erro: "E-mail já cadastrado"
            });
        }

        // Criptografa a senha
        const senhaHash = await bcrypt.hash(senha, 10);

        // Insere usuário
        const sql = `
            INSERT INTO tb_usuario
            (nome, email, senha)
            VALUES (?, ?, ?)
        `;

        await conexao.execute(sql, [
            nome,
            email,
            senhaHash
        ]);

        console.log("Usuário cadastrado com sucesso!");

        res.json({
            mensagem: "Usuário cadastrado com sucesso"
        });

    } catch (erro) {

        console.error("Erro ao cadastrar usuário:", erro);

        res.status(500).json({
            erro: "Erro ao cadastrar usuário!"
        });
    }
});


// ==========================================
// ROTA DE LOGIN
// ==========================================

app.post("/login", async (req, res) => {

    try {

        const { email, senha } = req.body || {};

        if (!email || !senha) {
            return res.status(400).json({
                erro: "Preencha todos os campos"
            });
        }

        const sql = `
            SELECT *
            FROM tb_usuario
            WHERE email = ?
        `;

        const [resultado] = await conexao.execute(sql, [email]);

        // Usuário não encontrado
        if (resultado.length === 0) {
            return res.status(401).json({
                mensagem: "Usuário ou senha inválidos!"
            });
        }

        const usuario = resultado[0];

        // Compara a senha digitada com a senha criptografada
        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                erro: "Senha inválida"
            });
        }

        // Cria sessão
        req.session.usuario = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        };

        res.json({
            mensagem: "Login realizado com sucesso!"
        });

    } catch (erro) {

        console.error("Erro no Login:", erro);

        res.status(500).json({
            erro: "Erro ao realizar login"
        });
    }
});


// ==========================================
// ROTA DE CONTATO
// ==========================================

app.post("/contato", async (req, res) => {

    try {

        const { nome, email, mensagem } = req.body;

        if (!nome || !email || !mensagem) {
            return res.status(400).json({
                erro: "Preencha todos os campos"
            });
        }

        const sql = `
            INSERT INTO tb_mensagem
            (nome, email, mensagem)
            VALUES (?, ?, ?)
        `;

        await conexao.execute(sql, [
            nome,
            email,
            mensagem
        ]);

        console.log("Mensagem enviada com sucesso!");

        res.json({
            mensagem: "Mensagem enviada com sucesso!"
        });

    } catch (erro) {

        console.error("Erro ao enviar mensagem:", erro);

        res.status(500).json({
            erro: "Erro ao enviar mensagem"
        });
    }
});


// ==========================================
// INICIANDO O SERVIDOR
// ==========================================

app.listen(3000, () => {
    console.log("=================================");
    console.log("Servidor rodando na porta 3000");
    console.log("=================================");
});
// CORRIJA ESSE ARQUIVO
require("dotenv").config();
const mysql = require("mysql2/promise");

// --- DIAGNÓSTICO TEMPORÁRIO (remover depois que resolver) ---
console.log("DB_HOST:", process.env.DB_HOST ? "OK" : "VAZIO");
console.log("DB_PORT:", process.env.DB_PORT ? "OK" : "VAZIO");
console.log("DB_USER:", process.env.DB_USER ? "OK" : "VAZIO");
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "OK" : "VAZIO");
console.log("DB_NAME:", process.env.DB_NAME ? "OK" : "VAZIO");
// --------------------------------------------------------------

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
   
});

module.exports = conexao;
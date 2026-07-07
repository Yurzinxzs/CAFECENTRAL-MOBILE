import {
  View, // Para agrupar elementos (= div)
  Text, // Para exibir textos (= p, h1...)
  TouchableOpacity, // Para botões clicáveis (= button)
  ScrollView, // Para a área principal com scroll,
  StyleSheet // Para aplicar estilo na página
 } from 'react-native'; // Importa os componentes View e Text
  import { Link } from 'expo-router';
  import { useState } from 'react';
  import { TextInput } from 'react-native-web';
  import  Header  from '../../components/Header'
  import Footer from '../../components/Footer'
import { lazy } from 'react';

  const API_URL = "http://localhost:3000"
 
  export default function Contato() {
  const[nome, setNome] = useState('');
   const[email,setEmail] = useState('');
   const[mensagem,setMensagem] = useState('');

   const[mensagemSistema,setMensagemSistema] = useState('');
   const[tipoMensagem, setTipoMensagem] = useState('');

    async function validarFormulario(){
      if(nome === ''){
        setMensagemSistema('Digite seu nome');
        setTipoMensagem('erro');
        return;
      }
      if(/\d/.test(nome)){
        setMensagemSistema("O nome não pode conter número!");
        setTipoMensagem("erro");
        return;
      }
      if(email === ''){
        setMensagemSistema("Digite seu e-mail");
        setTipoMensagem("erro");
        return;
      }
      if(!email.includes('@') || !email.includes('.com')){
        setMensagemSistema("Digite um e-mail válido");
        setTipoMensagem("erro");
        return;
      }
      if(mensagem === ''){
        setMensagemSistema('Digite uma mensagem');
        setTipoMensagem('erro');
        return;
      };
      if(mensagem.length < 10){
        setMensagemSistema('A mensagem deve ter pelo menos 10 caracteres');
        setTipoMensagem('erro');
        return;
      }

      //Tenta executar o bloco, se houver erro de rede, o código vai para o cath
    try{
      // Faz uma requisição HTTP para a rota da API usando o método POST
      const resposta = await fetch(`${API_URL}/contato`,{
        method: 'POST', // Define que a requisição vai ENVIAR DADOS
        headers: {'Content-Type': 'application/json'}, // Informa que o corpo da requisição está JSON
        credentials:'include', // Inclui cookies e sessão na requisição, útil para autenticação
        body: JSON.stringify({
          nome: nome,
          email: email,
          mensagem: mensagem
        }) // Converte os dados de JavaScript para texto JSON antes de enviar
      });
      // Converte a resposta recebida da API de JSON para objeto JavaScript
      const dados = await resposta.json()

      // Verifica se a resposta HTTP foi de sucesso
      if(resposta.ok){
        // Mostra a mensagem de sucesso vinda da API,
          //ou um texto padrão se ela não enviar nada
        setMensagemSistema(dados.mensagem || "Mensagem enviada")
        // Define o "estilo" da mensagem como sucesso
        setTipoMensagem("sucesso")
        // Limpa os campos do formulário
        setNome('');
        setEmail('');
        setMensagem('');
      } else{
        // Mostra a mensagem de erro vinda da API,
          // ou um texto padrão se ela não enviar nada
        setMensagemSistema(dados.erro || "Erro ao ao enviar mensagem")
        // Define o "estilo" da mensagem como erro
        setTipoMensagem("erro")
      }
    }catch(erro){
      //  Executado quando acontece falha na conexão,
        // como internet fora do ar ou servidor indisponivel
      setMensagemSistema("Erro ao conectar com o servidor")
      // Define o "estilo" da mensagem como erro
      setTipoMensagem("erro")
    }
  }
 return (
    <ScrollView contentContainerStyle={styles.body}>
        { /*=========== TOPO (HEADER) =============*/}
        { /*=========== Área de cabeçalho com logo e menu =============*/}
        <Header ativo = "contato"> </Header>

        { /*=========== CONTEUDO DA PAGINA  =============*/}
        { /* Parte final da pagina */}
        <View style={styles.container}>
        { /* Card branco que envolve o form*/}
          <View style={styles.cardContato}>
            <Text style={styles.tituloPagina}>
              Fale Conosco
            </Text>
            <Text style={styles.subtitulo}>
              Envie sua mensagem para nossa equipe
            </Text>

          <Text style={styles.label}>Seu nome:</Text>

            <TextInput style ={styles.input} 
                      placeholder='Digite seu nome'
                      value={nome} // exibe o estado da variavel
                      onChangeText={setNome} // atualiza o estado variavel
            ></TextInput>

          <Text style={styles.label}>Seu e-mail:</Text>

            <TextInput style ={styles.input}
                      placeholder='Digite seu e-mail'
                      keyboardType='email-address'
                      value={email} // exibe o estado da variavel
                      onChangeText={setEmail} // atualiza o estado variavel
            ></TextInput>

          <Text style={styles.label}>Mensagem</Text>

            <TextInput style ={styles.input}
                      placeholder='Digite sua mensagem'
                      multiline={true} // permite quebra de linha
                      numberOfLines={5} //altura inicial do campo
                      value={mensagem} //exibe o estado da variavel
                      onChangeText={setMensagem} // atualiza o estado variavel
            ></TextInput>

            <TouchableOpacity style={styles.btnEnviar}
                             onPress={validarFormulario}>
              <Text style={styles.textoBtn}>
                Enviar Mensagem
              </Text>
            </TouchableOpacity>

            <Text style={
              tipoMensagem==='erro'
              ? styles.mensagemErro
              : styles.mensagemSucesso
            }>
              {mensagemSistema}
            </Text>

          </View>
        </View>

        { /*=========== RODAPÉ =============*/}
        { /* Parte final da página */}
        <Footer></Footer>
    </ScrollView>
 );
}

const styles = StyleSheet.create(
  {
     body:{
      flexGrow: 1,
      justifyContent: 'space-between'
    },

    topo: {
      backgroundColor: '#21282A',
      padding:20,
      alignItems: 'center',
      gap: 10,
    },

    logoP1: {
      color:'#ffffff',
      fontSize:24,
      fontWeight: 'bold',
    },

    logoP2: {
      color:'#c8a96a',
      fontSize:24,
      fontWeight: 'bold',
    },

    menu: {
      marginTop: 10,
      alignItems: 'center',
      gap: 10,
    },

    menuItem: {
      color: '#c8a96a',
      fontWeight: 'bold',
    },

    ativo: {
      color: '#ffffff',
    },

    container: {
      backgroundColor:'#f5f5f5',
      padding:20,
    },

    cardContato: {
      backgroundColor: '#21282A',
      padding: 25,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 4,
      shadowOffset: {
          width: 0,
          height: 2,
      },
    },

    tituloPagina: {
      color: '#c8a96a',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    subtitulo: {
      textAlign: 'center',
      marginBottom: 10,
      color: '#ffffff'
    },

    label:{
      color: '#ffffff',
      padding: 6
    },

    input: {
      color: '#707070',
      borderColor: '#4e4e4e',
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      marginBottom: 15,
      height: 50,
      textAlignVertical: 'top',
    },

    btnEnviar: {
      backgroundColor: '#c8a96a',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems:'center',
    },

    textoBtn: {
      color: '#222',
      fontWeight: 'bold',
      fontSize: 16,
    },
     
    mensagemErro:{
      color: 'red',
      fontWeight: 'bold',
      textAlign:'center',
      marginTop: 15
    },

    mensagemSucesso:{
      color:'green',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 15
    },


    rodape: {
      backgroundColor: '#21282A',
      padding: 20,
      alignItems: 'center',
      gap:8,
    },

    textoRodape: {
      color : '#ffffff',
      textAlign: 'center',
      marginBottom: 8,
    },

    linkRodape: {
      color: '#c8a96a',
      fontWeight: 'bold',
      textDecorationLine: 'none'
    },

    tituloDestaque : {
      color: '#c8a96a',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }

  }
)

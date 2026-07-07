import {
  View,// Para agrupar elementos (= div)
  Text,// Para exibir textos (= p, h1...)
  TouchableOpacity, // Para botões clicáveis (= button) 
  ScrollView, // Para a área principal com scroll
  StyleSheet, //Para aplicar estilo na pagina
  } from 'react-native';
  import { Link } from 'expo-router';
  import  Header  from '../../components/Header'
  import Footer from '../../components/Footer'

  export default function Sobre() { {/* Define e exporta o componente principal da tela */}
  return ( // O que está aqui dentro será exibido na tela
    <ScrollView contentContainerStyle={styles.body}>
      {/* ============== TOPO (HEADER) ============== */}
      {/* ============== Área de cabeçalho com logo e menu ============== */}
      <Header ativo = "sobre"></Header>

    {/* ============== CONTEÚDO DA PÁGINA ============== */}

    <View style={styles.sobre}>
              <Text style={styles.titulo}>Sobre a CaféCentral</Text>
              <Text style={styles.texto}>A CafeCentral e uma cafeteria criada
              para Oferecer um ambiente acolhedor com produtos de qualidade e
              atendimento proximo ao cliente </Text>

              <Text style={styles.subtitulo}>Nossa missao</Text>
              <Text style={styles.texto}>Oferecer cafes, lanches e bons momentos aos clientes</Text>

              <Text style={styles.subtitulo}>Nossos Produtos</Text>
              <View style={styles.lista}>
                <Text style={styles.itemLista}>• Qualidade</Text>
                <Text style={styles.itemLista}>• Acolhimento</Text>
                <Text style={styles.itemLista}>• Respeito </Text>
              </View>
          </View>

    {/* ============== RODAPÉ ============== */}
    {/* Parte final da página */}
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

    topo:{
      backgroundColor: '#21282A',
      padding: 20,
      alignItems: 'Center',
      gap: 10,
    },

    logoP1: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold'
    },

    logoP2: {
      color: '#e7c78a',
      fontSize: 24,
      fontWeight: 'bold'
    },

    menu: {
      marginTop: 10,
      alignItems: 'center',
      gap: 10,
    },

    menuItem: {
      color: '#e7c78a',
      fontWeight: 'bold',
    },

    ativo: {
      color: '#ffffff',
    },

    sobre: {
      padding: 20,
      backgroundColor: '#21282A',
    },

    titulo: {
      color: '#c8a96a',
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },

    subtitulo: {
      color: '#c8a96a',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 8,
      textAlign: 'center'
    },

    texto: {
      color: '#ffffff',
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
    },

    lista: {
      marginTop: 10,
      alignItems: 'center'
    },

    itemLista: {
      color: '#ffffff',
      fontSize: 16,
      marginBottom: 6,
      fontWeight: 'bold',
    },

    rodape: {
      backgroundColor: '#21282A',
      padding: 20,
      alignItems: 'center',
      gap: 8,
    },

    textoRodape: {
      color: '#c8a96a',
      textAlign: 'center',
      marginBottom: 8,
    },

    linkRodape: {
      color: '#c8a96a',
      fontWeight: 'bold',
      textDecorationStyle: 'none',
    },

    tituloDestaque: {
      color: '#c8a96a',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }
  }

)
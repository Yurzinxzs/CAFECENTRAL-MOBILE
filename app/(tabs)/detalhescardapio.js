import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet, // Para aplicar estilo na página,
    Image,
    FlatList,
    TextInput
  } from 'react-native'; // Importa os componentes View e Text
    import { useState } from 'react';
    import { Link, useLocalSearchParams } from 'expo-router';
    import  Header  from '../../components/Header'
    import Footer from '../../components/Footer'
  
    export default function DetalhesCardapio() {
  
    const {
      titulo,
      descricao,
      R$,
      objetivo,
      publico,
    } = useLocalSearchParams();
  
    return (
      <ScrollView>
        { /*=========== TOPO (HEADER) =============*/}
        { /*=========== Área de cabeçalho com logo e menu =============*/}
        <Header ativo ="detalhecardapio"></Header>
  
        { /*=========== CONTEÚDO DA PÁGINA =============*/}
        <View style={styles.container}>
  
          <View style={styles.cardDetalhes}>
            {/* Aqui irão os dados do cardapio */}
            <Text style={styles.etiqueta}>
              Cardapio CaféCentral
            </Text>
  
            <Text style={styles.tituloCardapio} >
              {titulo}
            </Text>
  
            <Text style={styles.descricaoCardapio}>
              {descricao}
            </Text>
  
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>R$</Text>
              <Text style={styles.infoValor}> {R$} </Text>
            </View>
  
            <View style={styles.secaoDetalhe}>
              <Text style={styles.subtitulo}>Objetivo do cardapio </Text>
              <Text style={styles.textoDetalhe}> {objetivo} </Text>
            </View>
  
            <View style={styles.secaoDetalhe}>
              <Text style={styles.subtitulo}> Pra quem é esse cardapio </Text>
              <Text style={styles.textoDetalhe}> {publico} </Text>
            </View>
  
            <Link href='/cardapio' asChild>
              <TouchableOpacity style={styles.btnVoltar}>
                <Text style={styles.textoBtn}>
                  Voltar para Cardapio
                </Text>
              </TouchableOpacity>
            </Link>
  
  
  
  
          </View>
  
        </View>
  
        { /*=========== RODAPÉ =============*/}
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
        backgroundColor: '#1a4db3',
        padding: 20,
        alignItems: 'center',
        gap: 10,
      },
  
      logoP1: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
      },
  
      logoP2: {
        color: '#ff6a00',
        fontSize: 24,
        fontWeight: 'bold',
      },
  
      menu: {
        marginTop: 10,
        alignItems: 'center',
        gap: 10,
      },
  
      menuItem: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
  
      ativo: {
        color: '#ff6a00',
      },
  
      tituloPagina: {
        fontSize: 28,
        color: '#1a4db3',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
  
      cursos: {
        alignItems: 'center',
        backgroundColor: 'white'
      },
  
      buscarCursos: {
        backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        width: 140
      },
  
      curso: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        elevation: 3,
      },
  
      cursoTitulo: {
        color: '#1a4db3',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  
      btnCurso: {
        backgroundColor: '#1a4db3',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10
      },
  
      textoBtnCurso: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        width: 80
      },
  
      cursoBtnLink: {
        textAlign: 'center'
      },
  
      cursoImagem: {
        width: '100%',
        height: 140,
        backgroundColor: '#f5f5f5',
        borderRadius: 6,
        marginBottom: 10,
        resizeMode: 'contain'
  
      },
  
      cursoDescricao: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        margin: 10
      },
  
      cursoCH: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        margin: 10,
        fontWeight: 'bold'
      },
  
      container: {
        backgroundColor: '#f5f5f5',
        padding: 20,
      },
  
      cardDetalhes: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 3 }
  
      },
  
      etiqueta: {
        backgroundColor: '#e7c78a',
        color: '#ffffff',
        alignSelf: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        fontWeight: 'bold',
        marginTop: 15,
      },
  
      tituloCardapio: {
        color: '#e7c78a',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
      },
  
      descricaoCardapio: {
        color: "#222",
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
      },
  
      infoBox: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        gap: 12,
      },
  
      secaoDetalhe: {
        marginBottom: 20,
      },
  
      infoLabel: {
        color: '#e7c78a',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
      },
  
      infoValor: {
        color: "#222",
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
      },
  
      subtitulo: {
        color: '#e7c78a',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
      },
  
      textoDetalhe: {
        textAlign: 'center',
        color: "#222",
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
      },
  
      btnVoltar: {
        backgroundColor: '#e7c78a',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center'
      },
  
      textoBtn: {
        color: 'white',
        fontWeight: 'bold',
      },
  
      rodape: {
        backgroundColor: '#21282A',
        padding: 20,
        alignItems: 'center',
        gap: 8,
      },
 
      textoRodape: {
        color : '#e7c78a',
        textAlign: 'center',
        marginBottom: 8,
      },
 
      linkRodape: {
        color: '#e7c78a',
        fontWeight: 'bold',
        textDecorationLine: 'none'
      },
  
      tituloDestaque : {
        color: '#e7c78a',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      }
  
    }
  )
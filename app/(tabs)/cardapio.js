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
    import {useState} from 'react';
    import {Link} from 'expo-router';
    import cardapioJson from '../../assets/data/cardapio.json';
    import  Header  from '../../components/Header'
    import Footer from '../../components/Footer'
    import { useRouter } from 'expo-router'; 
  
   
   
  
      
  export default function Cardapio() {
    const router = useRouter();  
    // Cria um objeto JS como se fosse um dicionário para armazenar as imagens
    const imagensCardapio = {
                'cafeexpresso.webp' : require('../../assets/images/cafeexpresso.webp'),
                'cappuccino.webp': require('../../assets/images/cappuccino.webp'),
                'latte.webp': require('../../assets/images/latte.webp'),
                'mocha.jpg': require('../../assets/images/mocha.jpg'),
                'croissant.webp': require('../../assets/images/croissant.webp'),
                'paodqueijo.jpg': require('../../assets/images/paodqueijo.jpg'),
            };
    // Para cada cardapio em cardapiosJson:
    //  Junta tudo de cardapios.json + caminho de cada imagem em imagenscardapios
    const cardapios = cardapioJson.map((cardapio) =>
    (
    {
      ...cardapio,
      img: imagensCardapio[cardapio.img],
    }
    )
    );

    const [busca, setBusca] = useState('');

    const cardapiosFiltrados = cardapios.filter(
      (cardapio) => {
         return cardapio.titulo.toLowerCase().includes(busca.toLocaleLowerCase())
      }

   

    )

  

  
 
   return (
      <ScrollView contentContainerStyle={styles.body}>
          { /*=========== TOPO (HEADER) =============*/}
          { /*=========== Área de cabeçalho com logo e menu =============*/}
          <Header ativo = "cadarpio"></Header>

          { /*=========== CONTEÚDO DA PÁGINA =============*/}
          <View style={styles.cardapios}>
            <Text style={styles.tituloPagina}>
              Nossos cardapios
            </Text>

            <TextInput
              style={styles.buscarCardapios}
              placeholder="O que você deseja"
              value={busca}
              onChangeText={setBusca}
            ></TextInput>


            <FlatList
              data={cardapiosFiltrados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                // card do cardapio aqui
                <View style={styles.cardapio}>

                  <Text style={styles.cardapioTitulo}>
                      {item.titulo}
                  </Text>

                  <Image style={styles.cardapioImagem} source={item.img} ></Image>

                  <Text style={styles.cardapioDescricao}>
                    {item.descricao}
                  </Text>

                  <Text style={styles.cardapioR$}>
                    R$: {item.R$} 
                  </Text>

                  <TouchableOpacity 
                  style={styles.btnCardapio}
                  onPress={() => router.push({
                    pathname: '/detalhescardapio',
                    params: {
                      titulo: item.titulo,
                      descricao: item.descricao,
                      R$: item.R$,
                      objetivo: item.objetivo,
                      publico: item.publico,
                    }
                  })}
                >
                  <Text style={styles.textoBtnCardapio}>
                    Ver detalhes
                  </Text>
                </TouchableOpacity>
                </View>

              )}
            />
           
 
            </View>




          { /*=========== RODAPÉ =============*/}
          { /* Parte final da página */}
          <Footer> </Footer>
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
      color:'#e7c78a',
      fontSize:24,
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
      color: '#e7c78a',
    },

    tituloPagina: {
      fontSize: 28,
      color: '#e7c78a',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    cardapios: {
      alignItems: 'center',
      backgroundColor: 'white'
    },

    buscarCardapios: {
      backgroundColor: 'white',
      textAlign: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 8,
      width: 140
    },

    cardapio: {
      backgroundColor: '#fdf6ec',
      borderColor: '#c8a96a',
      borderWidth: 1.5,
      borderRadius: 16,
      padding: 18,
      marginBottom: 25,
      width: 280,
      alignItems: 'center',
    },

    cardapioTitulo:{
      color: '#e7c78a',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    btnCardapio: {
      backgroundColor: '#e7c78a',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 6,
      alignItems:'center',
      marginTop: 10,
      width: '100%',
    },

    textoBtnCardapio: {
      textAlign: 'center',
      color: '#1a1a1a',
      fontWeight: 'bold',
    },

    cardapioImagem: {
      width: 240,
      height: 140,
      backgroundColor: '#f5f5f5',
      borderRadius: 6,
      marginBottom: 10,
      resizeMode: 'cover',
    },

    cardapioR$: {
      textAlign: 'center',
      color:'#8b6f3d',
      fontSize: 16,
      margin: 10,
      fontWeight: 'bold'
    },

    cardapioR$: {
      textAlign: 'center',
      color:'#e7c78a',
      fontSize: 16,
      margin: 10,
      fontWeight: 'bold'
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
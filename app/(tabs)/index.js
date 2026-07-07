import {
  View, // Para agrupar elementos (= div)
  Text, // Para exibir textos (= p, h1...)
  TouchableOpacity, // Para botões clicáveis (= button)
  ScrollView, // Para a área principal com scroll,
  StyleSheet // Para aplicar estilo na página
 } from 'react-native'; // Importa os componentes View e Text
  import { Link } from 'expo-router';
  import  Header  from '../../components/Header'
  import Footer from '../../components/Footer'
  import { LinearGradient } from 'expo-linear-gradient';


 
export default function Index() {
 return (
    <ScrollView contentContainerStyle={styles.body}>
        { /*=========== TOPO (HEADER) =============*/}
        { /*=========== Área de cabeçalho com logo e menu =============*/}
        <Header ativo = "inicio"></Header>
  
        { /*=========== HERO =============*/}
        { /* Seção principal (banner incial) */}
        <LinearGradient
          style={styles.hero}
          colors={['#c8a96a', '#8b6f3d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.heroContent}>
            {/* Título Principal */}
            <Text style={styles.heroTitulo}>Bem-vindo ao Café Central</Text>

            {/* Descrição */}
            <Text style={styles.descricao}>
              Desfrute dos melhores cafés e doces da cidade
            </Text>

            {/* Botão principal */}
            <Link href="/login">
              <TouchableOpacity style={styles.btnPrimario}>
                <Text style={styles.textoBotaoPri}>Fazer Login</Text>
              </TouchableOpacity>
            </Link>

            {/* Botão secundário */}
            <Link href="/contato">
              <TouchableOpacity style={styles.btnSecundario}>
                <Text style={styles.textoBotaoSec}>Fale Conosco</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>

        { /*=========== DESTAQUES =============*/}
        { /* Seção com benefícios da plataforma*/}
        <View style={styles.destaques}>
          <View style={styles.container}>
         
          { /* Título da Seção */}
          <Text style ={styles.tituloDestaque}>Um pouco das nossas qualidades</Text>

          <View style={styles.cards}>
         
          { /* Lista dos Cards*/}

          { /* CARD 1 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Cafés Premium</Text> { /* Título */}
            <Text style = {styles.cardDescricao}> { /* Descrição */}
              Experiência única com grãos de alta qualidade
            </Text>
          </View>

          { /* CARD 2 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Ingredientes Selecionados</Text>
            <Text style = {styles.cardDescricao}>
              Produtos de frescos e cuidadosamente escolhidos
            </Text>
          </View>

          { /* CARD 3 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Atendimento especial</Text>
            <Text style = {styles.cardDescricao}>
              Equipe preparada para tornar sua visita inesquecível
            </Text>
          </View>

          </View>
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

    btnLogin: {
      backgroundColor: '#e7c78a',
      color: '#e7c78a',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius:8,
      marginTop: 10,
    },
    
    hero: {
      width: '100%',
      paddingVertical: 60,
      paddingHorizontal: 20,
      backgroundColor: '#c8a96a',
      textAlign: 'center',
      padding: 30,
      alignItems:'center',
      justifyContent: 'center',
    },

    heroContent: {
      alignItems: 'center',
      gap:10,
      width:'100%',
    },

    heroTitulo: {
      fontSize: 28,
      color: '#21282A',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    avisoLogin: {
      fontSize: 16,
      color: '#21282A',
      textAlign: 'center',
      marginTop: 10,
      marginBottom:20
    },

    btnPrimario: {
      backgroundColor: '#222',
      color: '#ffffff',
      paddingHorizontal:10,
      paddingVertical: 20,
      borderRadius: 8,
      marginBottom: 10,
      minWidth:160, 
    },

    btnSecundario: {
      backgroundColor: '#ffffff',
      color: '#e7c78a',
      paddingHorizontal:10,
      paddingVertical: 20,
      borderRadius: 8,
      borderColor: '#c8a96a',
      borderWidth: 2,
      marginTop: 10,
      minWidth:160,
    } ,

    textoBotaoPri : {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    textoBotaoSec : {
      color: '#222',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    descricao : {
      color: '#222',
      fontSize: 28,
      textAlign: 'center',
      lineHeight: 25,
      marginBottom: 10,
    },

    destaques: {
      padding: 20,
    },

    container: {
      padding: 20,
    },

    cards:{
      marginTop: 20,
      gap:15,
    },

    card : {
      backgroundColor: '#c8a96a',
      padding: 20,
      borderRadius: 8,
      marginBottom: 10,
      elevation: 3,
      shadowColor: '#c8a96a',
      shadowOpacity: 0.08,
      shadowRadius:4,
      textShadowOffset:{
        width:0,
        height:3,
      },
    },

    cardTitulo: {
      color: '#21282A',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },

    cardDescricao: {
      color: '#222',
      fontSize: 15,
      textAlign: 'center',
      lineHeight: 22,
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
      color: '#21282A',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }

  }
)
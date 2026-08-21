import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { Link } from "expo-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      {/* ==================== HEADER ==================== */}
      <Header ativo="inicio" />

      {/* ==================== HERO ==================== */}
      <LinearGradient
        style={styles.hero}
        colors={["#c8a96a", "#8b6f3d"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.heroContent}>
          <Text style={styles.heroTitulo}>
            Bem-vindo ao Café Central
          </Text>

          <Text style={styles.descricao}>
            Desfrute dos melhores cafés e doces da cidade
          </Text>

          {/* Botão Login */}
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.btnPrimario}>
              <Text style={styles.textoBotaoPri}>
                Fazer Login
              </Text>
            </TouchableOpacity>
          </Link>

          {/* Botão Contato */}
          <Link href="/contato" asChild>
            <TouchableOpacity style={styles.btnSecundario}>
              <Text style={styles.textoBotaoSec}>
                Fale Conosco
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </LinearGradient>

      {/* ==================== DESTAQUES ==================== */}
      <View style={styles.destaques}>
        <View style={styles.container}>
          <Text style={styles.tituloDestaque}>
            Um pouco das nossas qualidades
          </Text>

          <View style={styles.cards}>
            {/* CARD 1 */}
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>
                Cafés Premium
              </Text>

              <Text style={styles.cardDescricao}>
                Experiência única com grãos de alta qualidade
              </Text>
            </View>

            {/* CARD 2 */}
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>
                Ingredientes Selecionados
              </Text>

              <Text style={styles.cardDescricao}>
                Produtos frescos e cuidadosamente escolhidos
              </Text>
            </View>

            {/* CARD 3 */}
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>
                Atendimento especial
              </Text>

              <Text style={styles.cardDescricao}>
                Equipe preparada para tornar sua visita inesquecível
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    justifyContent: "space-between",
  },

  /* ==================== HEADER ==================== */

  topo: {
    backgroundColor: "#21282A",
    padding: 20,
    alignItems: "center",
    gap: 10,
  },

  logoP1: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },

  logoP2: {
    color: "#c8a96a",
    fontSize: 24,
    fontWeight: "bold",
  },

  menu: {
    marginTop: 10,
    alignItems: "center",
    gap: 10,
  },

  menuItem: {
    color: "#c8a96a",
    fontWeight: "bold",
  },

  ativo: {
    color: "#ffffff",
  },

  btnLogin: {
    backgroundColor: "#e7c78a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  /* ==================== HERO ==================== */

  hero: {
    width: "100%",
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  heroContent: {
    alignItems: "center",
    gap: 10,
    width: "100%",
  },

  heroTitulo: {
    fontSize: 28,
    color: "#21282A",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  descricao: {
    color: "#222",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 10,
  },

  /* ==================== BOTÕES ==================== */

  btnPrimario: {
    backgroundColor: "#222",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 10,
    minWidth: 160,
  },

  btnSecundario: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    borderColor: "#c8a96a",
    borderWidth: 2,
    marginTop: 10,
    minWidth: 160,
  },

  textoBotaoPri: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },

  textoBotaoSec: {
    color: "#222",
    fontWeight: "bold",
    textAlign: "center",
  },

  /* ==================== DESTAQUES ==================== */

  destaques: {
    padding: 20,
  },

  container: {
    padding: 20,
  },

  tituloDestaque: {
    color: "#21282A",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  cards: {
    marginTop: 20,
    gap: 15,
  },

  card: {
    backgroundColor: "#c8a96a",
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,

    // Sombra no Android
    elevation: 3,

    // Sombra no iOS/Web
    shadowColor: "#c8a96a",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardTitulo: {
    color: "#21282A",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  cardDescricao: {
    color: "#222",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },
});

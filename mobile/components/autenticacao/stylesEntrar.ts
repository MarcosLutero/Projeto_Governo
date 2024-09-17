import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: 'white', // Exemplo de cor de fundo, ajuste se necessário
  },
  imagem: {
    marginTop: 30,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: "100%" // Largura total do campo
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: "100%",
    borderColor: "#ccc",
    borderRadius: 4,
    paddingRight: 10, // Espaço para o ícone de mostrar senha
    marginBottom: 10 // Igualando o espaçamento inferior ao campo de CPF
  },
  passwordInput: {
    flex: 1,
    padding: 10
  },
  eyeIcon: {
    marginLeft: 10,  // Espaçamento à esquerda do ícone
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: 'flex-start', // Alinhando à esquerda
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15
  },
  checkbox: {
    margin: 8
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#0da3df", // Cor dos botões
    width: "100%",
    marginBottom: 10 // Para criar um espaçamento entre os botões
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white"
  },
  linkContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%" // Aumentando a largura total
  },
  esquecisenha: {
    textAlign: "center",
    color: "#0da3df", // Cor do link para "Esqueci a minha senha?"
    textDecorationLine: 'underline', // Simulando um link
  },
  lineContainer: {
    
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20, // Espaçamento vertical ao redor do "OU"
    textAlign: "center",
    width: "100%", // Largura total do container
  },
  line: {
    borderBottomColor: "#0da3df",
    borderBottomWidth: 2,
    flex: 1, // Ocupar todo o espaço disponível
  },
  ouText: {
    marginHorizontal: 10, 
    fontWeight: "bold"
  }
});

export default styles;

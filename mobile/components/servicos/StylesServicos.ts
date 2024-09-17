import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f3f3f3', // Exemplo de cor de fundo
    },
    item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 2, // Para uma leve sombra
      width: '30%', // Ajuste para ter 3 itens por linha
    },
    image: {
      width: 60,
      height: 60,
      marginBottom: 10,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default styles;
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './StylesServicos';

// Defina os tipos para suas rotas
type RootStackParamList = {
  Site: undefined;
  Saude: undefined;
  Eventos: undefined;
  Noticias: undefined;
  Obras: undefined;
  Educacao: undefined;
  ServicosSociais: undefined;
  Turismo: undefined;
};

// Defina o tipo de navegação
type NavigationProp = StackNavigationProp<RootStackParamList>;

const servicos = [
  { title: "Site", image: require('../images/site.png'), pagina: "Site" },
  { title: "Saúde", image: require('../images/saude.png'), pagina: "Saude" },
  { title: "Eventos", image: require('../images/eventos.png'), pagina: "Eventos" },
  { title: "Notícias", image: require('../images/noticias.png'), pagina: "Noticias" },
  { title: "Obras", image: require('../images/construcao.png'), pagina: "Obras" },
  { title: "Educação", image: require('../images/escola.png'), pagina: "Educacao" },
  { title: "Serviços Sociais", image: require('../images/servicoSocial.png'), pagina: "ServicosSociais" },
  { title: "Turismo", image: require('../images/turismo.png'), pagina: "Turismo" },
];

export default function Servicos() {

  // Use o tipo de navegação definido
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (pagina: keyof RootStackParamList) => {
    navigation.navigate(pagina);
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={servicos}
        numColumns={3} // Configura para 3 colunas
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => handlePress(item.pagina as keyof RootStackParamList)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        )}
        estimatedItemSize={100}
      />
    </View>
  );
}

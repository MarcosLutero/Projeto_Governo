import { View } from 'react-native';
import styles from './styles/StylesApp';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe todas as páginas necessárias
import Entrar from "./components/autenticacao/Entrar";
import Cadastro from "./components/autenticacao/Cadastro";
import Servicos from "./components/servicos/Servicos";
import Site from "./components/servicos/site/Site"; // Exemplo de caminho, ajuste conforme necessário
import Saude from "./components/servicos/saude/Saude";
import Eventos from "./components/servicos/eventos/Eventos";
import Noticias from "./components/servicos/noticias/Noticias";
import Obras from "./components/servicos/obras/Obras";
import Educacao from "./components/servicos/educacao/Educacao";
import ServicosSociais from "./components/servicos/servicosSociais/ServicoSocial";
import Turismo from "./components/servicos/turismo/Turismo";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Entrar">
          <Stack.Screen name="Entrar" component={Entrar}  options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Servicos" component={Servicos} />
          <Stack.Screen name="Site" component={Site} />
          <Stack.Screen name="Saude" component={Saude} />
          <Stack.Screen name="Eventos" component={Eventos} />
          <Stack.Screen name="Noticias" component={Noticias} />
          <Stack.Screen name="Obras" component={Obras} />
          <Stack.Screen name="Educacao" component={Educacao} />
          <Stack.Screen name="ServicosSociais" component={ServicosSociais} />
          <Stack.Screen name="Turismo" component={Turismo} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

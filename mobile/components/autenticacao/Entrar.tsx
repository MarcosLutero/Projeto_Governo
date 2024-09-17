import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import styles from './stylesEntrar';
import Checkbox from 'expo-checkbox';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';  // Biblioteca de ícones

type RootStackParamList = {
  Entrar: undefined;
  Cadastro: undefined;
  Servicos: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Entrar'>;

export default function SignInSide() {
  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const handleLogin = () => {
    navigation.navigate('Servicos');
  };

  const handleCadastrar = () => {
    navigation.navigate('Cadastro');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require('../images/brasaoPara.png')}
      />
      <TextInputMask
        type={'cpf'}
        value={cpf}
        onChangeText={text => setCpf(text)}
        style={styles.input}
        placeholder="CPF"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Ionicons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="gray" 
          />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Lembrar-me?</Text>
      </View>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </Pressable>

      <View style={styles.linkContainer}>
        <Text style={styles.esquecisenha}>Esqueci a minha senha?</Text>
        
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.ouText}>OU</Text>
          <View style={styles.line} />
        </View>

        <Pressable style={styles.button} onPress={handleCadastrar}>
          <Text style={styles.text}>Cadastra-se</Text>
        </Pressable>
      </View>
    </View>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Pressable, GestureResponderEvent, Image, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import styles from './stylesCadastrar';
import { Ionicons } from '@expo/vector-icons';

interface InputWithIconProps {
  icon: keyof typeof Ionicons.glyphMap;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  secureTextEntry?: boolean;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ icon, ...props }) => (
  <View style={styles.inputContainer}>
    <Ionicons name={icon} size={24} color="#0da3df" style={styles.inputIcon} />
    <TextInput {...props} style={styles.inputWithIcon} />
  </View>
);

const SignupSchema = Yup.object().shape({
  nomeCompleto: Yup.string().required('Nome completo é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: Yup.string().required('Senha é obrigatória'),
  confirmarSenha: Yup.string().oneOf([Yup.ref('senha'), undefined], 'As senhas devem coincidir').required('Confirmação de senha é obrigatória'),
  cpf: Yup.string().required('CPF é obrigatório'),
  rua: Yup.string().required('Rua é obrigatória'),
  numero: Yup.string().required('Número da residência é obrigatório'),
  whatsapp: Yup.string().required('WhatsApp é obrigatório'),
  municipio: Yup.string().required('Município é obrigatório'),
  sexo: Yup.string().required('Sexo é obrigatório'),
  termosAceitos: Yup.boolean().oneOf([true], 'Você deve aceitar os termos de uso.'),
});

export default function Cadastro() {
  const [step, setStep] = useState(1);
  const [municipios, setMunicipios] = useState([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pickerRefMunicipio = useRef<any>(null);
  const pickerRefSexo = useRef<any>(null);

  useEffect(() => {
    const fetchMunicipios = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/15/municipios');
        const municipiosData = response.data.map((municipio: any) => ({
          label: municipio.nome,
          value: municipio.nome,
        }));
        setMunicipios(municipiosData);
      } catch (error) {
        console.error('Erro ao buscar municípios:', error);
      }
    };
    fetchMunicipios();
  }, []);

  const handlePressProfile = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a galeria foi negada.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const salvarUsuario = async (values: any) => {
    console.log("chamou o salvar")
    try {
      const response = await axios.post('http://localhost:3001/usuario', {
        nomeCompleto: values.nomeCompleto,
        email: values.email,
        senha: values.senha,
        cpf: values.cpf,
        rua: values.rua,
        numero: values.numero,
        whatsapp: values.whatsapp,
        municipio: values.municipio,
        sexo: values.sexo,
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
      }
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
      Alert.alert('Erro', 'Erro ao salvar o usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Formik
          initialValues={{
            nomeCompleto: '',
            email: '',
            senha: '',
            confirmarSenha: '',
            cpf: '',
            rua: '',
            numero: '',
            whatsapp: '',
            municipio: '',
            sexo: '',
            termosAceitos: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log("Valores:", values);
            salvarUsuario(values);
          }}
        >
          {({ handleChange, handleBlur, setFieldValue, handleSubmit, values, errors, touched }) => (
            <View style={styles.container}>
              <View style={styles.header}>
                <Pressable onPress={handlePressProfile}>
                  <View style={styles.profileImagePlaceholder}>
                    {selectedImage ? (
                      <Image source={{ uri: selectedImage }} style={styles.profileImage} />
                    ) : (
                      <Ionicons name="person-add-outline" size={50} color="#fff" />
                    )}
                  </View>
                </Pressable>
              </View>

              {step === 1 ? (
                <>
                  <InputWithIcon
                    icon="person-outline"
                    placeholder="Nome Completo"
                    onChangeText={handleChange('nomeCompleto')}
                    onBlur={handleBlur('nomeCompleto')}
                    value={values.nomeCompleto}
                  />
                  {touched.nomeCompleto && errors.nomeCompleto && <Text style={styles.error}>{errors.nomeCompleto}</Text>}

                  <InputWithIcon
                    icon="mail-outline"
                    placeholder="E-mail"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                  <InputWithIcon
                    icon="lock-closed-outline"
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={handleChange('senha')}
                    onBlur={handleBlur('senha')}
                    value={values.senha}
                  />
                  {touched.senha && errors.senha && <Text style={styles.error}>{errors.senha}</Text>}

                  <InputWithIcon
                    icon="lock-closed-outline"
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    onChangeText={handleChange('confirmarSenha')}
                    onBlur={handleBlur('confirmarSenha')}
                    value={values.confirmarSenha}
                  />
                  {touched.confirmarSenha && errors.confirmarSenha && <Text style={styles.error}>{errors.confirmarSenha}</Text>}

                  <Pressable style={styles.submitButton} onPress={() => setStep(2)}>
                    <Text style={styles.submitButtonText}>Próximo</Text>
                  </Pressable>
                </>
              ) : (
                <>
                  <View style={styles.inputSelect}>
                    <Ionicons name="location-outline" size={24} color="#0da3df" style={styles.inputIconSelect} />
                    <Pressable
                      style={{ flex: 1 }}
                      onPress={() => {
                        pickerRefMunicipio.current.togglePicker();
                      }}
                    >
                      <RNPickerSelect
                        onValueChange={(value) => setFieldValue('municipio', value)}
                        placeholder={{ label: 'Selecione seu Município', value: '' }}
                        items={municipios}
                        style={{
                          inputIOS: {
                            borderWidth: 1,
                            borderColor: 'white',
                            padding: 12,
                            marginBottom: 15,
                            borderRadius: 5,
                            backgroundColor: '#fff',
                            fontSize: 16,
                            width: '100%',
                          },
                          inputAndroid: {
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'white',
                            paddingTop: 12,
                            marginBottom: 15,
                            borderRadius: 5,
                            fontSize: 16,
                            width: '100%',
                          },
                        }}
                        useNativeAndroidPickerStyle={false}
                        ref={pickerRefMunicipio}
                        value={values.municipio || ''} // Use uma string vazia se o valor for null ou undefined
                      />
                    </Pressable>
                  </View>

                  <View style={styles.inputSelect}>
                    <Ionicons name="person-outline" size={24} color="#0da3df" style={styles.inputIconSelect} />
                    <Pressable
                      style={{ flex: 1 }}
                      onPress={() => {
                        pickerRefSexo.current.togglePicker();
                      }}
                    >
                      <RNPickerSelect
                        onValueChange={(value) => setFieldValue('sexo', value)}
                        placeholder={{ label: 'Selecione seu Sexo', value: '' }}
                        items={[
                          { label: 'Masculino', value: 'masculino' },
                          { label: 'Feminino', value: 'feminino' },
                          { label: 'Outro', value: 'outro' },
                        ]}
                        style={{
                          inputIOS: {
                            borderWidth: 1,
                            borderColor: 'white',
                            padding: 12,
                            marginBottom: 15,
                            borderRadius: 5,
                            backgroundColor: '#fff',
                            fontSize: 16,
                            width: '100%',
                          },
                          inputAndroid: {
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'white',
                            paddingTop: 12,
                            marginBottom: 15,
                            borderRadius: 5,
                            fontSize: 16,
                            width: '100%',
                          },
                        }}
                        useNativeAndroidPickerStyle={false}
                        ref={pickerRefSexo}
                        value={values.sexo || ''}
                      />
                    </Pressable>
                  </View>

                  <InputWithIcon
                    icon="home-outline"
                    placeholder="Rua"
                    onChangeText={handleChange('rua')}
                    onBlur={handleBlur('rua')}
                    value={values.rua}
                  />
                  {touched.rua && errors.rua && <Text style={styles.error}>{errors.rua}</Text>}

                  <InputWithIcon
                    icon="home-outline"
                    placeholder="Número"
                    onChangeText={handleChange('numero')}
                    onBlur={handleBlur('numero')}
                    value={values.numero}
                  />
                  {touched.numero && errors.numero && <Text style={styles.error}>{errors.numero}</Text>}

                  <View style={styles.inputContainer}>
                    <Ionicons name="call-outline" size={24} color="#0da3df" style={styles.inputIcon} />
                    <TextInputMask
                      type={'custom'}
                      options={{
                        mask: '(99) 99999-9999',
                      }}
                      value={values.whatsapp}
                      onChangeText={handleChange('whatsapp')}
                      style={styles.inputWithIcon}
                      placeholder="WhatsApp"
                    />
                  </View>
                  {touched.whatsapp && errors.whatsapp && <Text style={styles.error}>{errors.whatsapp}</Text>}

                  <View style={styles.checkboxContainer}>
                    <Checkbox
                      value={values.termosAceitos}
                      onValueChange={(newValue) => setFieldValue('termosAceitos', newValue)}
                      color={values.termosAceitos ? '#0da3df' : undefined}
                    />
                    <Text>Li e aceito os termos de uso</Text>
                  </View>

                  <Pressable
                    style={[
                      styles.submitButton,
                      { backgroundColor: values.termosAceitos ? '#0da3df' : '#ccc' },
                    ]}
                    onPress={handleSubmit as unknown as (event: GestureResponderEvent) => void}
                    disabled={!values.termosAceitos}
                  >
                    <Text style={styles.submitButtonText}>Finalizar Cadastro</Text>
                  </Pressable>
                </>
              )}
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}

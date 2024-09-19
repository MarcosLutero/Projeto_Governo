import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface User {
  id: string;
  nomeCompleto: string;
  email: string;
  cpf: string;
  rua: string;
  numero: string;
  whatsapp: string;
  municipio: string;
  sexo: string;
  // Adicione outros campos necessários do seu banco de dados
}

interface AuthContextData {
  user: User | null;
  signIn: (email: string, senha: string) => Promise<void>;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, senha: string) => {
    try {
      const response = await axios.post('http://localhost:3001/usuario/login', { email, senha });
      const userData: User = response.data;

      // Armazena as informações do usuário no estado e no AsyncStorage
      setUser(userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Erro ao fazer login');
    }
  };

  const signOut = async () => {
    // Limpa o estado do usuário e remove do AsyncStorage
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  // Carregar as informações do usuário do AsyncStorage (persistência de login)
  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

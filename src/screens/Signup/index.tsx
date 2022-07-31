import React, { useState } from 'react';
import { Alert, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Heading, Icon, useTheme, VStack, KeyboardAvoidingView } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import auth from "@react-native-firebase/auth";

import Logo from './../../../assets/logo_primary.svg';
import { Input } from './../../components/Input';
import { Button } from './../../components/Button';

export function Signup() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    if (!email || !password) {
      return Alert.alert("Entrar", "Informe e-mail e senha!");
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/email-already-in-use') {
          return Alert.alert("Cadastro", "O e-mail já está em uso.");
        }

        if (error.code === 'auth/invalid-email') {
          return Alert.alert("Cadastro", "E-mail inválido.");
        }

        if (error.code === 'auth/weak-password') {
          return Alert.alert("Cadastro", "A senha utilizada é muito fraca.");
        }

        return Alert.alert("Entrar", "Não foi possível cadastrar.");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <VStack flex={1} alignItems="center" bgColor="gray.600" pt={24}>
        <KeyboardAvoidingView w={"full"} h={420} behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <VStack flex={1} alignItems="center" px={8}>
            <Logo />
            <Heading color="gray.100" h={12} fontSize="xl" mt={20} mb={6}>Cadastre-se</Heading>
            <Input
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect={false}
              leftElement={<Icon ml={2} as={<Envelope color={theme.colors.gray[300]} />} />}
              mb={4}
              onChangeText={setEmail}
              value={email}
            />
            <Input
              placeholder='Senha'
              autoCapitalize='none'
              autoCorrect={false}
              autoComplete="off"
              secureTextEntry
              leftElement={<Icon ml={2} as={<Key color={theme.colors.gray[300]} />} />}
              mb={8}
              onChangeText={setPassword}
              value={password}
            />
            <Button
              title='Cadastrar'
              w="full"
              h={12}
              bgColor="primary.700"
              onPress={handleSubmit}
              isDisabled={(email === '' || password === '')}
              isLoading={loading}
            />
          </VStack>
        </KeyboardAvoidingView>
      </VStack>
    </TouchableWithoutFeedback>
  );
}
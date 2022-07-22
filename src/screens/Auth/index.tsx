import React, { useState } from 'react';
import { Alert, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Heading, Icon, useTheme, VStack, KeyboardAvoidingView } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import auth from "@react-native-firebase/auth";

import Logo from './../../../assets/logo_primary.svg';
import { Input } from './../../components/Input';
import { Button } from './../../components/Button';

export function Auth() {
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
      .signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-passord') {
          return Alert.alert("Entrar", "E-mail ou senha inválida.");
        }

        if (error.code === 'auth/invalid-email') {
          return Alert.alert("Entrar", "E-mail inválido.");
        }

        return Alert.alert("Entrar", "Não foi possível acessar.");
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <VStack flex={1} alignItems="center" bgColor="gray.600" pt={24}>
        <KeyboardAvoidingView w={"full"} h={420} behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <VStack flex={1} alignItems="center" px={8}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>Acesse sua conta</Heading>
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
              title='Entrar'
              w="full"
              h={12}
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
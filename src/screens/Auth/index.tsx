import React, { useState } from 'react';
import { Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Heading, Icon, useTheme, VStack, KeyboardAvoidingView } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

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

    setTimeout(() => {
      console.log({ email, password });
      setEmail('');
      setPassword('');
      setLoading(false)
    }, 1000)
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
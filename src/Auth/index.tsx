import React from 'react';
import { Heading, Icon, useTheme, VStack } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Auth() {
  const theme = useTheme();
  return (
    <VStack flex={1} alignItems="center" bgColor="gray.600" px={8} pt={24}>
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
      />
      <Input
        placeholder='Senha'
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete="off"
        secureTextEntry
        leftElement={<Icon ml={2} as={<Key color={theme.colors.gray[300]} />} />}
        mb={4}
      />
      <Button
        title='Entrar'
        w="full"
      />
    </VStack>
  );
}
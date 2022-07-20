import { HStack, IconButton, useTheme, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';

import Logo from "./../../../assets/logo_secondary.svg";

export function Header() {
  const { colors } = useTheme();
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pt={12}
      pb={5}
      px={6}
    >
      <Logo />

      <IconButton
        icon={<SignOut size={26} color={colors.gray[300]} />}
        _pressed={
          {
            bgColor: "gray.500"
          }
        } />
    </HStack>
  );
}
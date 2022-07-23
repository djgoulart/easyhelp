import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft, SignOut } from 'phosphor-react-native';
import auth from '@react-native-firebase/auth';

import Logo from "./../../../assets/logo_secondary.svg";
import { Alert } from 'react-native';

export type SimpleHeaderProps = StyledProps & {
  title: string;
}

function handleLogout() {
  auth()
    .signOut()
    .catch(error => Alert.alert("Sair", "Não foi possível sair"));
}

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
        onPress={handleLogout}
        icon={<SignOut size={26} color={colors.gray[300]} />}
        _pressed={
          {
            bgColor: "gray.500"
          }
        } />
    </HStack>
  );
}

export function SimpleHeader({ title, ...rest }: SimpleHeaderProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pt={12}
      pb={6}
      px={6}
      {...rest}
    >
      <IconButton
        onPress={handleBack}
        icon={<CaretLeft size={24} color={colors.gray[300]} />}
        _pressed={
          {
            bgColor: "gray.500"
          }
        }
      />

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}
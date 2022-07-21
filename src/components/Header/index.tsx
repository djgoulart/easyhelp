import { Heading, HStack, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft, SignOut } from 'phosphor-react-native';

import Logo from "./../../../assets/logo_secondary.svg";

export type SimpleHeaderProps = StyledProps & {
  title: string;
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

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pt={12}
      pb={6}
      {...rest}
    >
      <IconButton
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
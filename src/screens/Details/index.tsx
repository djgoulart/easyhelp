import { useRoute } from '@react-navigation/native';
import { Center, Text, useTheme, VStack } from 'native-base';
import { SimpleHeader } from '../../components/Header';

type RouteParams = {
  orderId: string;
}

export function Details() {
  const { colors } = useTheme();
  const { params } = useRoute();
  const { orderId } = params as RouteParams;

  return (
    <VStack flex={1} p={6} backgroundColor="gray.600">
      <SimpleHeader title='Solicitação' />
      <Center>
        <Text color={colors.gray[200]}>{orderId}</Text>
      </Center>
    </VStack>
  );
}
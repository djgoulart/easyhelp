import { VStack } from 'native-base';
import { SimpleHeader } from '../../components/Header';

export function Details() {
  return (
    <VStack flex={1} p={6} backgroundColor="gray.700">
      <SimpleHeader title='Solicitação' />
    </VStack>
  );
}
import { VStack } from 'native-base';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <VStack flex={1} pb={6} bgColor="gray.700" >
      <Header />
    </VStack>
  );
}
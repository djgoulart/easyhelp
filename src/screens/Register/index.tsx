import { VStack } from 'native-base';
import { SimpleHeader } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register() {

  return (
    <VStack flex={1} p={6} backgroundColor="gray.600">
      <SimpleHeader title='Nova solicitação' />

      <Input
        placeholder='Número do patrimônio'
        mt={4}
      />
      <Input
        placeholder='Descrição do problema'
        flex={1}
        mt={5}
        multiline
        textAlignVertical='top'
      />

      <Button title='Cadastrar' mt={5} />
    </VStack>
  );
}
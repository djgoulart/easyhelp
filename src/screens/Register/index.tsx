import { useState } from 'react';
import { VStack } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { SimpleHeader } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Alert } from 'react-native';
import { Loading } from '../../components/Loading';

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleCreateNewOrder() {
    if (!patrimony || !description) {
      return Alert.alert("Registrar", "Preencha todos os campos.");
    }

    setIsLoading(true);

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        Alert.alert("Registrar", "Solicitação aberta com sucesso.");
        navigation.navigate("home");
      })
      .catch(error => {
        setIsLoading(false);
        Alert.alert("Registrar", "Ocorreu um erro ao salvar a sua solicitação");
      })
  }

  return (
    <VStack flex={1} py={6} backgroundColor="gray.600">
      <SimpleHeader title='Nova solicitação' />

      <VStack flex={1} px={6}>
        <Input
          placeholder='Número do patrimônio'
          mt={4}
          onChangeText={setPatrimony}
        />
        <Input
          placeholder='Descrição do problema'
          flex={1}
          mt={5}
          multiline
          textAlignVertical='top'
          onChangeText={setDescription}
        />

        <Button
          title='Cadastrar'
          mt={5}
          onPress={handleCreateNewOrder}
          isLoading={isLoading}
        />
      </VStack>
    </VStack>
  );
}
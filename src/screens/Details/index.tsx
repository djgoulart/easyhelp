import { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HStack, KeyboardAvoidingView, ScrollView, Text, useTheme, VStack } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { Hourglass, CircleWavyCheck, DesktopTower, Clipboard } from 'phosphor-react-native';

import { dateFormat } from '../../utils/firestoreDateFormat';

import { OrderFirestoreDTO } from '../../DTOs/OrderFirestoreDTO';
import { SimpleHeader } from '../../components/Header';
import { OrderType } from '../../components/Order';
import { Loading } from '../../components/Loading';
import { CardDetails } from '../../components/CardDetails';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Alert, Platform } from 'react-native';
import { DetailsLoading } from '../../components/Loading/DetailsLoading';

type RouteParams = {
  orderId: string;
};

type OrderDetails = OrderType & {
  description: string;
  solution?: string;
  closed: string;
};

export function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [solution, setSolution] = useState('');
  const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);

  const { colors } = useTheme();
  const { params } = useRoute();
  const { orderId } = params as RouteParams;
  const navigation = useNavigation();

  function handleCloseOrder() {
    setIsUpdating(true);

    firestore()
      .collection('orders')
      .doc(orderId)
      .update({
        status: 'closed',
        solution,
        closed_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        Alert.alert("Registrar", "Solicitação aberta com sucesso.");
        navigation.navigate("home");
      })
      .catch(error => {
        setIsUpdating(false);
        console.log(error);
        Alert.alert("Encerrar", "Ocorreu um erro ao encerrar a sua solicitação");
      })
  };

  useEffect(() => {
    firestore()
      .collection<OrderFirestoreDTO>('orders')
      .doc(orderId)
      .get()
      .then((doc) => {
        const {
          patrimony,
          description,
          status,
          created_at,
          closed_at,
          solution
        } = doc.data();

        const closed = closed_at ? dateFormat(closed_at) : null;

        setOrder({
          id: doc.id,
          patrimony,
          description,
          status,
          solution,
          when: dateFormat(created_at),
          closed
        });

        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <DetailsLoading />
  }

  return (
    <VStack flex={1} pb={6} backgroundColor="gray.700">
      <SimpleHeader title='Solicitação' />

      <HStack bgColor={colors.gray[500]} justifyContent="center" p={4}>
        {
          order.status === 'closed'
            ? <CircleWavyCheck size={22} color={colors.green[300]} />
            : <Hourglass size={22} color={colors.secondary[700]} />
        }
        <Text
          fontSize={"sm"}
          color={order.status === 'closed' ? colors.green[300] : colors.secondary[700]}
          ml={2}
          textTransform="uppercase"
        >
          {order.status === 'closed' ? 'Finalizado' : 'Em andamento'}
        </Text>
      </HStack>
      <ScrollView mx={5} showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView w={"full"} behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <CardDetails
            title='Equipamento'
            description={`Patrimonio ${order.patrimony}`}
            icon={DesktopTower}
            footer={order.when}
          />

          <CardDetails
            title='Descrição do problema'
            description={order.description}
            icon={Clipboard}
          />

          <CardDetails
            title='Solução'
            icon={CircleWavyCheck}
            footer={order.closed && `Encerrado em ${order.closed}`}
          >
            {
              order.status === 'closed'
                ? <Text
                  color={colors.gray[100]}
                  fontSize="md">
                  {order.solution}
                </Text>
                : <Input
                  placeholder='Solução do problema'
                  flex={1}
                  h={24}
                  multiline
                  textAlignVertical='top'
                  onChangeText={setSolution}
                />
            }
          </CardDetails>
        </KeyboardAvoidingView>
      </ScrollView>
      {
        order.status === 'open' &&
        <Button
          title='Finalizar'
          m={5}
          isLoading={isUpdating}
          onPress={handleCloseOrder}
        />
      }
    </VStack>
  );
}
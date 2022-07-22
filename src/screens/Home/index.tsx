import { useCallback, useEffect, useState } from 'react';
import { Heading, HStack, Text, VStack, FlatList, useTheme, Center } from 'native-base';
import { ChatTeardropText } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Order, OrderType } from '../../components/Order';
import { dateFormat } from '../../utils/firestoreDateFormat';

type FilterType = 'open' | 'closed';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterActive, setFilterActive] = useState('open');
  const [orders, setOrders] = useState<OrderType[]>([
    {
      id: '159898',
      patrimony: '123',
      when: '21/07/2022 às 19:00',
      status: 'open',
    }
  ]);

  const { colors } = useTheme()
  const navigation = useNavigation();

  const handleChangeFilter = useCallback((filter: FilterType) => {
    setFilterActive(filter);
  }, [])

  const handleNewOrder = useCallback(() => {
    navigation.navigate('register');
  }, []);

  const handleViewOrder = useCallback((orderId: string) => {
    navigation.navigate('details', { orderId: orderId });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const subscriber = firestore()
      .collection('orders')
      .where('status', '==', filterActive)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          const { patrimony, description, status, created_at } = doc.data();

          return {
            id: doc.id,
            patrimony,
            description,
            status,
            when: dateFormat(created_at)
          }
        });

        setOrders(data);
        setIsLoading(false);
      });

    return subscriber;

  }, [filterActive]);

  return (
    <VStack flex={1} pb={6} bgColor="gray.700" >
      <Header />
      <VStack flex={1} px={6}>
        <HStack
          w={"full"}
          mt={8}
          mb={4}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Heading fontSize={"lg"} color={"gray.100"}>
            Solicitações
          </Heading>
          <Text fontSize={"md"} color={"gray.200"}>3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            title='Em andamento'
            type='open'
            isActive={filterActive === 'open'}
            onPress={() => handleChangeFilter('open')}
          />
          <Filter
            title='Finalizados'
            type='closed'
            isActive={filterActive === 'closed'}
            onPress={() => handleChangeFilter('closed')}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} onPress={() => handleViewOrder(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text
                mt={2}
                color={colors.gray[300]}
                textAlign="center">
                Você ainda não possui {"\n"}solicitações
                {filterActive === 'open' ? ' em andamento.' : ' finalizadas.'}
              </Text>
            </Center>
          )}
        />

        <Button title='Nova solicitação' onPress={handleNewOrder} />
      </VStack>
    </VStack>

  );
}
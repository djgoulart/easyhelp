import { Heading, HStack, Text, VStack } from 'native-base';
import { useCallback, useState } from 'react';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';

type FilterType = 'open' | 'closed';

export function Home() {
  const [filterActive, setFilterActive] = useState('open');

  const handleChangeFilter = useCallback((filter: FilterType) => {
    console.log(filter);
    setFilterActive(filter);
  }, [])

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
      </VStack>
    </VStack>

  );
}
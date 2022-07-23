import { HStack, Skeleton, VStack } from 'native-base';
import { SimpleHeader } from '../Header';

export function DetailsLoading() {
  return (
    <VStack flex={1} backgroundColor="gray.700">
      <SimpleHeader title='Solicitação' />

      <VStack flex={1} pt={6} px={5}>
        <VStack mb={4} w="full" h={40} pt={2} px={6} borderWidth={1} borderColor="gray.400" rounded={"sm"}>
          <HStack mt={2} w={"full"} space={2} overflow="hidden" alignItems="center" >
            <Skeleton size={4} rounded="full" startColor="gray.400" endColor="gray.600" />
            <Skeleton h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.600" />
          </HStack>
          <Skeleton mt={4} h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.600" />
          <Skeleton.Text mt={6} h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.700" />
        </VStack>

        <VStack mb={4} w="full" h={40} pt={2} px={6} borderWidth={1} borderColor="gray.400" rounded={"sm"}>
          <HStack mt={2} w={"full"} space={2} overflow="hidden" alignItems="center" >
            <Skeleton size={4} rounded="full" startColor="gray.400" endColor="gray.600" />
            <Skeleton h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.600" />
          </HStack>
          <Skeleton mt={4} h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.600" />
          <Skeleton.Text mt={6} h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.700" />
        </VStack>

        <VStack mb={4} w="full" h={40} pt={2} px={6} borderWidth={1} borderColor="gray.400" rounded={"sm"}>
          <HStack mt={2} w={"full"} space={2} overflow="hidden" alignItems="center" >
            <Skeleton size={4} rounded="full" startColor="gray.400" endColor="gray.600" />
            <Skeleton h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.600" />
          </HStack>
          <Skeleton mt={4} h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.600" />
          <Skeleton.Text mt={6} h="2" w={"full"} rounded="full" startColor="gray.400" endColor="gray.700" />
        </VStack>
      </VStack>

    </VStack>
  );
}
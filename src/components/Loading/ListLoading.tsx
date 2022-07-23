import { Box, Center, HStack, Skeleton, VStack } from 'native-base';

export function ListLoading() {
  return (
    <VStack flex={1}>
      <HStack
        bgColor="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
        h={14}>
        <Box h="full" w={2} bg="gray.500" />

        <VStack flex={1} my={5} mx={6} space={2} overflow="hidden">
          <Skeleton h="2" w={"full"} rounded="full" startColor="gray.300" endColor="gray.500" />
          <Skeleton h="2" w={"full"} rounded="full" startColor="gray.300" endColor="gray.500" />
        </VStack>

        <Skeleton
          startColor="gray.300" endColor="gray.500"
          size={8}
          rounded="full" mr={5} />
      </HStack>
      <HStack
        bgColor="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
        h={14}>
        <Box h="full" w={2} bg="gray.500" />

        <VStack flex={1} my={5} mx={6} space={2} overflow="hidden">
          <Skeleton h="2" w={"full"} rounded="full" startColor="gray.300" endColor="gray.500" />
          <Skeleton h="2" w={"full"} rounded="full" startColor="gray.300" endColor="gray.500" />
        </VStack>

        <Skeleton
          startColor="gray.300" endColor="gray.500"
          size={8}
          rounded="full" mr={5} />
      </HStack>
      <HStack
        bgColor="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
        h={14}>
        <Box h="full" w={2} bg="gray.500" />

        <VStack flex={1} my={5} mx={6} space={2} overflow="hidden">
          <Skeleton h="2" w={"full"} rounded="full" startColor="gray.300" endColor="gray.500" />
          <Skeleton h="2" w={"full"} rounded="full" startColor="gray.300" endColor="gray.500" />
        </VStack>

        <Skeleton
          startColor="gray.300" endColor="gray.500"
          size={8}
          rounded="full" mr={5} />
      </HStack>
    </VStack>


  );
}
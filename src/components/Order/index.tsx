import { Box, Circle, HStack, Text, useTheme, VStack, Pressable, IPressableProps, PresenceTransition } from 'native-base';
import { ClockAfternoon, Hourglass, CircleWavyCheck } from 'phosphor-react-native';

export type OrderType = {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed'
};

type Props = IPressableProps & {
  data: OrderType;
}

export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme();
  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <PresenceTransition visible initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 250
      }
    }} >
      <Pressable {...rest}>
        <HStack
          bgColor="gray.600"
          mb={4}
          alignItems="center"
          justifyContent="space-between"
          rounded="sm"
          overflow="hidden"
        >
          <Box h="full" w={2} bgColor={statusColor} />

          <VStack flex={1} my={5} ml={5}>
            <Text color={"white"} fontSize="md">
              Patrimônio: {data.patrimony}
            </Text>
            <HStack alignItems="center">
              <ClockAfternoon size={15} color={colors.gray[300]} />
              <Text color="gray.200" fontSize="xs" ml={1}>
                {data.when}
              </Text>
            </HStack>
          </VStack>

          <Circle bgColor="gray.500" h={12} w={12} mr={5}>
            {
              data.status === 'closed'
                ? <CircleWavyCheck size={24} color={statusColor} />
                : <Hourglass size={24} color={statusColor} />
            }
          </Circle>
        </HStack>
      </Pressable>
    </PresenceTransition>
  );
}
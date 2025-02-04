import { HStack, useTheme, VStack, Text, Box } from 'native-base';
import { IconProps } from 'phosphor-react-native';
import { ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  footer?: string;
  icon: React.ElementType<IconProps>;
  children?: ReactNode;
}

export function CardDetails({
  title,
  description = null,
  footer = null,
  icon: Icon,
  children
}: Props) {
  const { colors } = useTheme();

  return (
    <VStack bgColor={colors.gray[600]} p={5} mt={5} rounded="sm">
      <HStack alignItems="center" mb={4}>
        <Icon color={colors.primary[700]} size={22} />
        <Text
          ml={2}
          color={colors.gray[300]}
          fontSize="sm"
          textTransform="uppercase">
          {title}
        </Text>
      </HStack>

      {
        !!description &&
        <Text
          color={colors.gray[100]}
          fontSize="md">
          {description}
        </Text>
      }

      {children}

      {
        !!footer &&
        <Box borderTopWidth={1} borderTopColor={colors.gray[400]} mt={3}>
          <Text
            mt={2}
            color={colors.gray[300]}
            fontSize="sm">
            {footer}
          </Text>
        </Box>
      }
    </VStack>
  );
}
import React from 'react';
import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      bgColor="green.700"
      _pressed={
        {
          bgColor: "green.500"
        }
      }
      {...rest}>
      <Heading fontSize="md" color="white">{title}</Heading>
    </NativeBaseButton>
  );
}
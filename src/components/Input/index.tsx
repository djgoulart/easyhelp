import React from 'react';
import { IInputProps, Input as NativeBaseInput } from 'native-base';


export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bgColor="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={
        {
          borderWidth: 1,
          borderColor: "green.500"
        }
      }
      {...rest}
    />
  );
}
import React from 'react';
import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Link({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      variant="link"
      {...rest}
    >

      <Heading
        fontSize="md"
        fontWeight={400}
        color="green.500"
        underline
      >
        {title}
      </Heading>

    </NativeBaseButton>
  );
}
import { Input, Item, Label } from 'native-base';
import React from 'react';
import ErrorText from './ErrorText';

function CommonInputField({ label, value, onChangeText, errors, ...props }) {
  return (
    <>
      <Item floatingLabel error={!!errors}>
        <Label>{label}</Label>
        <Input value={value} onChangeText={onChangeText} {...props} />
      </Item>
      <ErrorText error={errors}>{errors?.[0]}</ErrorText>
    </>
  );
}

export default CommonInputField;

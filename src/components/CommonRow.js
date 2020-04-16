import React from 'react';
import { Body, ListItem, Right, Text } from 'native-base';
import CloseButton from './CloseButton';

function CommonRow({ onRowPress, onRemovePress, text }) {
  return (
    <ListItem onPress={onRowPress}>
      <Body>
        <Text>{text}</Text>
      </Body>
      <Right>
        <CloseButton onPress={onRemovePress} />
      </Right>
    </ListItem>
  );
}

export default CommonRow;

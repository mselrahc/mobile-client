import React from 'react';

import {
  Body,
  Icon,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Button,
} from 'native-base';

function ItemListItem({ onRowPress, onRemovePress, item }) {
  const loadingIndicator = require('../../../../assets/images/loading.png');
  const image = `https://i.picsum.photos/id/${Math.floor(
    Math.random() * 1000,
  )}/200/200.jpg`;

  return (
    <ListItem onPress={onRowPress} thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri: image,
          }}
          loadingIndicatorSource={loadingIndicator}
        />
      </Left>
      <Body>
        <Text>{item.name}</Text>
      </Body>
      <Right>
        <Button transparent onPress={onRemovePress}>
          <Icon name="close" />
        </Button>
      </Right>
    </ListItem>
  );
}

export default ItemListItem;

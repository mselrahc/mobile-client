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

function ItemListItem({ navigation, item }) {
  return (
    <ListItem onPress={() => navigation.navigate('Item Detail', { item })}>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              'https://static.republika.co.id/uploads/images/inpicture_slide/secangkir-teh-_190524103045-721.jpg',
          }}
        />
      </Left>
      <Body>
        <Text>{item.name}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="close" />
        </Button>
      </Right>
    </ListItem>
  );
}

export default ItemListItem;

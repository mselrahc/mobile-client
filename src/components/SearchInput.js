import { Button, Icon, Input, Item, Text } from 'native-base';
import React from 'react';

function SearchInput({ value, onChangeText }) {
  return (
    <>
      <Button transparent>
        <Text>Search</Text>
      </Button>
      <Item>
        <Input
          value={value}
          placeholder="Search"
          onChangeText={onChangeText}
          returnKeyType="search"
        />
        {value ? (
          <Button danger onPress={() => onChangeText('')} transparent>
            <Icon name="close" />
          </Button>
        ) : (
          <Icon name="search" />
        )}
      </Item>
    </>
  );
}

export default SearchInput;

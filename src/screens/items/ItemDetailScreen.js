import { Button, Form, Input, Item, Label, Text } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveItem } from '../../actions/items';

function ItemDetailScreen({ route }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.items);
  const [item, setItem] = useState(route.params.item || {});

  const setName = name => setItem(prevItem => ({ ...prevItem, name }));
  const submitItem = () => dispatch(saveItem(item));

  return (
    <ScrollView>
      <Form>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input
            value={item?.name}
            onChangeText={setName}
            style={styles.input}
          />
        </Item>
        <Button style={styles.button} onPress={submitItem} disabled={isLoading}>
          <Text>Save</Text>
        </Button>
      </Form>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  input: {
    color: 'black',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default ItemDetailScreen;

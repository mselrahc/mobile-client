import { Button, Form, Input, Item, Label, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveItem } from '../../actions/items';
import { removeError, removeSaved } from '../../actions/item';

function ItemDetailScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const { itemSaved, isLoading, validationErrors } = useSelector(
    state => state.item,
  );

  if (itemSaved) {
    navigation.navigate('Items List');
  }

  const [item, setItem] = useState(route.params.item || {});

  const setName = name => {
    setItem(prevItem => ({ ...prevItem, name }));
    dispatch(removeError('name'));
  };

  const submitItem = () => {
    dispatch(saveItem(item));
  };

  useEffect(() => {
    return () => {
      dispatch(removeSaved());
      dispatch(removeError());
    };
  }, [dispatch]);

  return (
    <ScrollView>
      <Form>
        <Item floatingLabel error={!!validationErrors?.name}>
          <Label>Name</Label>
          <Input
            value={item?.name}
            onChangeText={setName}
            style={styles.input}
          />
        </Item>
        {validationErrors?.name && <Text>{validationErrors.name[0]}</Text>}
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

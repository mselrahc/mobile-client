import { Button, Form, Input, Item, Label, Text } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveItem } from '../../actions/items';

function ItemDetailScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [item, setItem] = useState(route.params.item || {});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const setItemValue = (name, value) => {
    setItem(prevItem => ({ ...prevItem, [name]: value }));
    removeError(name);
  };

  const removeError = key => {
    if (key === undefined) {
      setErrors({});
    } else {
      const { [key]: _, ...rest } = errors;
      setErrors(rest);
    }
  };

  const onSaveSuccess = () => {
    setIsLoading(false);
    navigation.navigate('Items List');
  };
  const onSaveFailure = saveError => {
    setIsLoading(false);
    setErrors(saveError);
  };

  const submitItem = () => {
    setIsLoading(true);
    dispatch(saveItem(item, onSaveSuccess, onSaveFailure));
  };

  return (
    <ScrollView>
      <Form>
        <Item floatingLabel error={!!errors?.name}>
          <Label>Name</Label>
          <Input
            value={item?.name}
            onChangeText={value => setItemValue('name', value)}
            style={styles.input}
          />
        </Item>
        {errors?.name && <Text>{errors.name[0]}</Text>}
        <Button style={styles.button} onPress={submitItem} disabled={isLoading}>
          <Text>{isLoading ? 'Saving...' : 'Save'}</Text>
        </Button>
      </Form>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default ItemDetailScreen;

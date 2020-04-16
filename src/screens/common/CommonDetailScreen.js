import { Button, Form, Text } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

function CommonDetailScreen({
  navigation,
  route,
  save,
  listScreenName,
  formContentComponent,
}) {
  const dispatch = useDispatch();
  const [entity, setEntity] = useState(route.params.entity || {});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const setEntityValue = (name, value) => {
    setEntity({ ...entity, [name]: value });
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
    navigation.navigate(listScreenName);
  };
  const onSaveFailure = saveError => {
    setIsLoading(false);
    setErrors(saveError);
  };

  const saveEntity = () => {
    setIsLoading(true);
    dispatch(save(route.params.id, entity, onSaveSuccess, onSaveFailure));
  };

  const FormContent = formContentComponent;

  return (
    <ScrollView>
      <Form>
        {formContentComponent && (
          <FormContent
            entity={entity}
            setEntityValue={setEntityValue}
            errors={errors}
          />
        )}
        <Button style={styles.button} onPress={saveEntity} disabled={isLoading}>
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

export default CommonDetailScreen;

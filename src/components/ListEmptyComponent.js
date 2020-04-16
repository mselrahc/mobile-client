import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const ListEmptyComponent = ({ name }) => (
  <View>
    <Text style={styles.text}>No {name} found</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default ListEmptyComponent;

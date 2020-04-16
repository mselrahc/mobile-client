import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

function CloseButton({ onPress }) {
  return (
    <Button transparent onPress={onPress}>
      <Icon name="close" style={styles.icon} />
    </Button>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'gray',
  },
});

export default CloseButton;

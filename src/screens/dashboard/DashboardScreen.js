import { Text, Button } from 'native-base';
import React from 'react';
import { View } from 'react-native';

function DashboardScreen({ navigation }) {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button onPress={() => navigation.navigate('Login')}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
}

export default DashboardScreen;

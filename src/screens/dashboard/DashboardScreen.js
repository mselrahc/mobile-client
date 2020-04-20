import { Button, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { logout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

function DashboardScreen() {
  const dispatch = useDispatch();
  const { username } = useSelector(state => state.auth);
  const doLogout = async () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Welcome, {username}</Text>
      <Button onPress={doLogout}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
}

export default DashboardScreen;

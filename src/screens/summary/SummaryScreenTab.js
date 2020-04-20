import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StockSummaryScreen from './StockSummaryScreen';
import { View, Text, Button } from 'native-base';
import { logout } from '../../actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import TransactionSummaryScreen from './TransactionSummaryScreen';
import { dashboardRoutes } from '../../configs/routes';

const Tab = createMaterialTopTabNavigator();

function SummaryScreenTab() {
  const dispatch = useDispatch();
  const { username } = useSelector(state => state.auth);
  const doLogout = async () => {
    dispatch(logout());
  };

  return (
    <>
      <View>
        <Text>Dashboard</Text>
        <Text>Welcome, {username}</Text>
        <Button onPress={doLogout}>
          <Text>Log out</Text>
        </Button>
      </View>
      <Tab.Navigator>
        {dashboardRoutes.map(route => (
          <Tab.Screen name={route.name} component={route.component} />
        ))}
      </Tab.Navigator>
    </>
  );
}

export default SummaryScreenTab;

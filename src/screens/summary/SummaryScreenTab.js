import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Body, Button, Header, Icon, Right, Title } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
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
      <Header>
        <Body>
          <Title>{username}</Title>
        </Body>
        <Right>
          <Button onPress={doLogout}>
            <Icon name="power" />
          </Button>
        </Right>
      </Header>
      <Tab.Navigator>
        {dashboardRoutes.map(route => (
          <Tab.Screen name={route.name} component={route.component} />
        ))}
      </Tab.Navigator>
    </>
  );
}

export default SummaryScreenTab;

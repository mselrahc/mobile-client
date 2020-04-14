import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { itemsRoutes } from '../../configs/routes';
const Stack = createStackNavigator();

function ItemsScreensStack() {
  return (
    <Stack.Navigator>
      {itemsRoutes.map(({ name, component }, i) => (
        <Stack.Screen key={i} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}

export default ItemsScreensStack;

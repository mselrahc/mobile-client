import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

function CommonStack({ routes }) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {routes.map(({ name, component }, i) => (
        <Stack.Screen key={i} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}

export default CommonStack;

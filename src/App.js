import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './configs/store';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { appRoutes } from './configs/routes';
import { Root } from 'native-base';
import AppToast from './components/AppToast';

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            {appRoutes.map(({ name, component }, i) => (
              <Stack.Screen key={i} name={name} component={component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
        <AppToast />
      </Root>
    </Provider>
  );
}

export default App;

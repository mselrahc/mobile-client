import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { restoreToken } from './actions/auth';
import AppToast from './components/AppToast';
import store from './configs/store';
import { MainScreenTab } from './screens';
import { LoginScreen, SplashScreen } from './screens/auth';

console.disableYellowBox = true;

const Stack = createStackNavigator();

function AppNavigator() {
  const dispatch = useDispatch();
  const { token, isLoading } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(restoreToken());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : token === null ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Main" component={MainScreenTab} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Root>
        <AppNavigator />
        <AppToast />
      </Root>
    </Provider>
  );
}

export default App;

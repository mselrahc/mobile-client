import { Button, Form, Input, Item, Label, Text, Icon } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

const image = require('../../../assets/images/login-bg-mdpi.jpg');

function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const toggleIsPasswordHidden = () => setIsPasswordHidden(hidden => !hidden);

  const userdata = { username, password };
  const onLoginFailure = () => setIsLoading(false);
  const onLoginSuccess = () => {
    setIsLoading(false);
    navigation.navigate('Main');
  };

  const doLogin = () => {
    setIsLoading(true);
    dispatch(login(userdata, onLoginSuccess, onLoginFailure));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.background}
        imageStyle={styles.image}
      >
        <Form>
          <Item fixedLabel>
            <Label style={styles.text}>Username</Label>
            <Input
              style={styles.text}
              value={username}
              onChangeText={setUsername}
            />
          </Item>
          <Item fixedLabel>
            <Label style={styles.text}>Password</Label>
            <Input
              secureTextEntry={isPasswordHidden}
              style={styles.text}
              value={password}
              onChangeText={setPassword}
            />
            <Button onPress={toggleIsPasswordHidden} transparent>
              <Icon
                type="Entypo"
                name={isPasswordHidden ? 'eye' : 'eye-with-line'}
                style={styles.icon}
              />
            </Button>
          </Item>
        </Form>
        <Button
          title="Log in"
          onPress={doLogin}
          style={styles.button}
          disabled={isLoading}
        >
          <Text>Log in</Text>
        </Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    opacity: 0.7,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
  },
  icon: {
    color: 'white',
  },
});

export default LoginScreen;

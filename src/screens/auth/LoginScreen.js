import { Button, Form, Input, Item, Label, Text } from 'native-base';
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const image = require('../../../assets/images/login-bg-mdpi.jpg');

function LoginScreen({ navigation }) {
  const login = () => navigation.navigate('Main');
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
            <Input style={styles.text} />
          </Item>
          <Item fixedLabel>
            <Label style={styles.text}>Password</Label>
            <Input secureTextEntry style={styles.text} />
          </Item>
        </Form>
        <Button title="Log in" onPress={login} style={styles.button}>
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
});

export default LoginScreen;

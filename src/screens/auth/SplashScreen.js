import { Container } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function SplashScreen() {
  const bgImage = require('../../../assets/images/loading.gif');
  return (
    <Container>
      <ImageBackground
        source={bgImage}
        style={styles.background}
        resizeMode="contain"
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
});

export default SplashScreen;

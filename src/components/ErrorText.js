import React from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

function ErrorText({ error, children }) {
  return error ? <Text style={styles.text}>{children}</Text> : null;
}

ErrorText.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'red',
    paddingHorizontal: 14,
  },
});

export default ErrorText;

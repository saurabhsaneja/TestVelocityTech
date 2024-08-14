import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFont } from '../helpers';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: getFont('Black')
  }
});

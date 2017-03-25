import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ap from './src/App.js';
import { Font } from 'expo';

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    });
  }

  render() {
    return (
        <Ap />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './src/App.js';

export default class App extends React.Component {
  render() {
    return (
        <App />
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

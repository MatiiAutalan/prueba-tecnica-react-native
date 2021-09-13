import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'

export default class App extends Component{

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> ¡Mira tus directorios!</Text>
      <Home/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
    alignItems:'center'
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold'
  }
});

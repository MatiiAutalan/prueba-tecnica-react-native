import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImputUrl from './components/ImputUrl'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> ¡Mira tus directorios!</Text>
      <ImputUrl/>
      <View style={styles.title}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    shadowColor: 1,
    alignItems:'center'
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold'
  }
});

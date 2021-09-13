import React, { Component } from "react";
import { View, StyleSheet,TouchableHighlight, TextInput, Text } from "react-native";

class Home extends Component {
    state = {url: ""} 
    render() {
       
      return (
        <View style= {styles.container}>
          <View>
            <TextInput
              style={styles.input}
            />
            <TouchableHighlight style= {styles.containerBotton}>
              <Text style={styles.botton}>Mostrar directorio</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: 1,
    alignItems:'center'
  },

  input: {
    height: 30,
    width: 250,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "#ffff",
  },

  containerBotton : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  botton : {
    width: 130,
    height: 30,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: "#4b0082",
    color: "#ffff",
    fontWeight: 'bold'
  }
});

export default Home;
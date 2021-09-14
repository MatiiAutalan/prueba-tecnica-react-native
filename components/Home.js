import React, { Component } from "react";
import { View, StyleSheet,TouchableHighlight, TextInput, Text } from "react-native";
import TreeDirectory from './TreeDirectory'

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        url: ""
      } 
    }
    changeUrl(url){
      this.setState({url})
    }

    render() {
      return (
        <View style= {styles.container}>
          <View>
            <TextInput
              placeholder= "Inglesa tu URL"
              value={this.state.url}
              style={styles.input}
              onChangeText={(url)=> this.changeUrl(url)} 
            />
            <TouchableHighlight 
            style= {styles.containerBotton}
            >
              <Text style={styles.botton}>Mostrar directorio</Text>
            </TouchableHighlight>
          </View>
          <TreeDirectory></TreeDirectory>
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
    height: 35,
    width: 250,
    margin: 12,
    borderColor: '#4b0082',
    borderWidth: 3,
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
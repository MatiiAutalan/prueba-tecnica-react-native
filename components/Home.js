import React, { useState } from "react";
import { View, StyleSheet,TouchableHighlight, TextInput, Text, Alert} from "react-native";
import DirectoryTree from './TreeDirectory'

const Home = () =>{
      const [url, setUrl] = useState("")
      const [directoryTree, setDirectory] = useState([])

      const getDirectoryTree = async () => {
        if (url !== "") {
          try {
            const data = await fetch(url);
            const directoryTree = await data.json();
            setDirectory(directoryTree)
          } catch (error) {
            Alert.alert(
              "Hubo un error al obtener los datos. Por favor intentar nuevamente"
            );
          }
        }
      };

      return (
        <View style= {styles.container}>
          <View>
            <TextInput
              placeholder= "Inglesa tu URL"
              onChangeText={url => setUrl(url)}
              style={styles.input}
            />
            <TouchableHighlight 
            style= {styles.containerBotton}
            onPress= {getDirectoryTree}
            >
              <Text style={styles.botton}> Mostrar directorio</Text>
            </TouchableHighlight>
          </View>
          <DirectoryTree directoryTree= {directoryTree} ></DirectoryTree>
        </View>
      )

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
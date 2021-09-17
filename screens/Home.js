import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Text,
  Alert,
} from "react-native";
import DirectoryTree from "../components/DirectoryTree";

const Home = () => {
  const [url, setUrl] = useState("");
  const [directoryTree, setDirectory] = useState([]);

  const getDirectoryTree = async () => {
    if (url !== "") {
      try {
        const data = await fetch(url);
        const directoryTree = await data.json();
        setDirectory(directoryTree);
      } catch (error) {
        Alert.alert(
          "Hubo un error al obtener los datos. Por favor intentar nuevamente"
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> ¡Bienvenido a FileSeeks! </Text>
        <Text style={styles.subtitle}> ¡Mira tus directorios!</Text>
        <TextInput
          placeholder="Inglesa tu URL"
          onChangeText={(url) => setUrl(url)}
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.containerBotton}
          onPress={getDirectoryTree}
        >
          <Text style={styles.botton}> Mostrar directorio</Text>
        </TouchableHighlight>
      </View>
      <DirectoryTree
        style={styles.containerTree}
        directoryTree={directoryTree}
      ></DirectoryTree>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    textAlign: "center",
  },

  input: {
    height: 35,
    width: 250,
    margin: "auto",
    marginVertical: 10,
    borderColor: "#4b0082",
    borderWidth: 3,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "#ffff",
  },

  containerBotton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  botton: {
    width: 130,
    height: 30,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: "#4b0082",
    color: "#ffff",
    fontWeight: "bold",
    borderRadius: 14
  },

  containerTree: {
    width: 300,
    alignSelf: "flex-start",
  },
});

export default Home;

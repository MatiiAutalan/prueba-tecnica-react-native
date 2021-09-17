import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import folderImg from "../assets/folder.png"
import fileImg from "../assets/file.png"

const tree = [];

function DirectoryTree({ directoryTree }) {
  const directoryTreeMapper = useCallback((directoryArray, subDirectory) => {
    directoryArray.forEach((directory) => {
      if (directory.type === "directory") {
        tree.push({
          type: directory.type,
          index: subDirectory,
          name: directory.name,
        });
        if (directory.files.length > 0) {
          directoryTreeMapper(directory.files, subDirectory + 1);
        }
      } else {
        tree.push({
          type: directory.type,
          index: subDirectory,
          name: directory.name,
        });
      }
    });
  }, []);

  useEffect(() => {
    directoryTreeMapper(directoryTree, 1);
  }, [directoryTree, directoryTreeMapper]);

  return (
    <View style={styles.container}>
      {tree.length > 0 &&
        tree.map((branch, index) => ( 
          <View key={index} style={{ marginLeft: 30 * branch.index }}>
            <View style={branch.type === 'directory' ? styles.folder : styles.file}>
              <Image 
              source={{ uri: branch.type === 'directory' ? folderImg : fileImg }} 
              style={styles.image}
              resizeMode= 'contain' />
              <Text style= {branch.type === 'directory' ? styles.nameFolder : styles.nameFile}> 
              {branch.type === 'directory' ? branch.name : branch.name + "_" + branch.type }
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: 300,
    flex: 1 ,
    alignItems: 'center',
  },

  folder: {
    flex: 1,
    flexDirection: 'row',
    width: 250,
    marginTop: 5
  },

  file: {
    flex: 1,
    flexDirection: 'row',
    width: 250,
    marginTop: 5
  },

  files: {
    marginLeft: 20,
  },

  image:{
    width: 17,
    height: 17,
    marginTop: 5,
    marginRight: 5

  },

  nameFolder: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20
  },

  nameFile: {
    textTransform: 'lowercase',
    fontSize: 17,
    fontStyle: 'italic'
  }
});

export default DirectoryTree;

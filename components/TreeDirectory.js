import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const tree = [];

function DirectoryTree({ directoryTree }) {
  const directoryTreeMapper = useCallback((directoryArray, subDirectiorio) => {
    directoryArray.forEach((directory) => {
      if (directory.type === "directory") {
        tree.push({
          type: directory.type,
          index: subDirectiorio,
          name: directory.name,
        });
        if (directory.files.length > 0) {
          directoryTreeMapper(directory.files, subDirectiorio + 1);
        }
      } else {
        tree.push({
          type: directory.type,
          index: subDirectiorio,
          name: directory.name,
        });
      }
    });
  }, []);

  useEffect(() => {
    directoryTreeMapper(directoryTree, 1);
  }, [directoryTree, directoryTreeMapper]);

  return (
    <View>
      {tree.length > 0 &&
        tree.map((branch, index) => (
          <View key={index} style={{ marginLeft: 15 * branch.index }}>
            <Text>{branch.type}</Text>
            <Text>{branch.name}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  directories: {},

  file: {
    marginLeft: 20,
  },

  files: {
    marginLeft: 20,
  },
});

export default DirectoryTree;

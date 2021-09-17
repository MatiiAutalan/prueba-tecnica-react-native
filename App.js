import React, { Component } from "react";
import { StyleSheet} from "react-native";
import Home from "./screens/Home";

export default class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
});

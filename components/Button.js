import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Button = ({ title }) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => console.log(title)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#333",
    color: "whitesmoke",
    justifyContent: "center",
    padding: 20,
  },
  buttonText: {
    color: "whitesmoke",
    textTransform: "uppercase",
  },
});

export default Button;

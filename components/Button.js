import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#C46210",
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

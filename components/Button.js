import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const Button = ({ style, title, onPress }) => {
  return (
    <TouchableHighlight style={[style, styles.button]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "lightsalmon",
    color: "whitesmoke",
    justifyContent: "center",
    padding: 5,
    borderRadius: 7,
    width: "30%",
    height: "25%",
    marginTop: 15,
  },
  buttonText: {
    color: "whitesmoke",
    textTransform: "uppercase",
    fontFamily: "Roboto_700Bold",
  },
});

export default Button;

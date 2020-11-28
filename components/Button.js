import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const Button = ({ style, title, onPress, theme }) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: theme ? "#2d78ea" : "#444",
      color: "whitesmoke",
      justifyContent: "center",
      padding: 5,
      borderRadius: 7,
      width: "30%",
      height: "25%",
      marginTop: 15,
    },
    buttonText: {
      color: "#fff",
      textTransform: "uppercase",
      fontFamily: "Roboto_700Bold",
    },
  });

  return (
    <TouchableHighlight
      underlayColor={theme ? "#A1CAF1" : "#222"}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;

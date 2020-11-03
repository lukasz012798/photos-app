import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  text: {},
});

export default Screen;

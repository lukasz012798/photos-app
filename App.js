import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title={"Wybierz zdjęcie"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "whitesmoke",
  },
});

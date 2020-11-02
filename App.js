import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as ImagePicker from "expo-image-picker";

import Button from "./components/Button";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("Permissions not granted!");
  };

  useEffect(() => {
    requestPermission();
  }, []);

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

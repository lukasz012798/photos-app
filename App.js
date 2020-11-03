import React, { useState, useEffect } from "react";
import { Image, View, Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "./components/Button";
import Screen from "./components/Screen";

export default App = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("No permissions!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    setImage(result.uri);
  };

  return (
    <Screen>
      <Button title="Wybierz zdjęcie" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.photo}
          resizeMode="contain"
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: "100%",
    width: "100%",
    marginTop: 10,
  },
});

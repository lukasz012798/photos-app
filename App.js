import React, { useState, useEffect } from "react";
import { Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { WorkSans_600SemiBold } from "@expo-google-fonts/work-sans";

import Main from "./screens/Main";

export default App = () => {
  const [image, setImage] = useState(null);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    WorkSans_600SemiBold,
  });

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
    // (<Screen>
    //   <Button title="Wybierz zdjęcie" onPress={pickImage} />
    //   {image && (
    //     <Image
    //       source={{ uri: image }}
    //       style={styles.photo}
    //       resizeMode="contain"
    //     />
    //   )}
    // </Screen>)
    fontsLoaded ? (
      <Main onPress={pickImage} image={image} />
    ) : (
      <Text>Ładowanie</Text>
    )
  );
};

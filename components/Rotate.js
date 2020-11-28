import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Rotate = ({ style, image, theme }) => {
  const [rotateValue, setRotateValue] = useState(0);
  const styles = StyleSheet.create({
    zoom: {
      backgroundColor: theme ? "white" : "#999",
      display: "flex",
      alignItems: "center",
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
    buttons: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    choosePhotoText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 150,
      height: 50,
      textAlign: "center",
      textAlignVertical: "center",
      fontFamily: "WorkSans_600SemiBold",
      textTransform: "uppercase",
      transform: [{ translateX: -75 }, { translateY: -25 }],
      color: theme ? "#333" : "#999",
    },
    image: {
      height: "100%",
      width: "100%",
      borderRadius: 10,
      transform: [{ rotateZ: `${rotateValue}deg` }],
    },
    imageContainer: {
      height: "70%",
      width: "100%",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: theme ? "#eee" : "#444",
    },
    text: {
      fontFamily: "WorkSans_600SemiBold",
      fontSize: 20,
      color: theme ? "black" : "#444",
    },
  });
  return (
    <View style={[style, styles.zoom]}>
      <Text style={styles.text}>{`ROTATE EDITOR ${rotateValue}\u00B0`}</Text>
      <View style={styles.imageContainer}>
        <Text style={styles.choosePhotoText}>Wybierz zdjęcie</Text>
        <Image
          resizeMode={"cover"}
          style={styles.image}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.buttons}>
        {[0, 45, 90, 180, 225, 315].map((i) => (
          <Button
            key={i}
            title={`${i}\u00B0`}
            onPress={() => setRotateValue(i)}
            theme={theme}
          />
        ))}
      </View>
    </View>
  );
};

export default Rotate;

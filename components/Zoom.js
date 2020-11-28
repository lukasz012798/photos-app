import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Zoom = ({ style, image, theme }) => {
  const [zoomValue, setZoomValue] = useState(1);

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
      transform: [{ scaleX: zoomValue }, { scaleY: zoomValue }],
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
      <Text style={styles.text}>{`ZOOM EDITOR x${zoomValue}`}</Text>
      <View style={styles.imageContainer}>
        <Text style={styles.choosePhotoText}>Wybierz zdjęcie</Text>
        <Image
          resizeMode={"cover"}
          style={styles.image}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.buttons}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Button
            theme={theme}
            key={i}
            title={`${i}`}
            onPress={() => setZoomValue(i)}
          />
        ))}
      </View>
    </View>
  );
};

export default Zoom;

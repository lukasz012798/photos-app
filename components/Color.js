import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Color = ({ style, image, colors, theme }) => {
  const [opacityValue, setOpacityValue] = useState(0.3);
  const [colorValue, setColorValue] = useState(colors[0]);
  const styles = StyleSheet.create({
    color: {
      backgroundColor: theme ? "white" : "#999",
      display: "flex",
      alignItems: "center",
      paddingVertical: 15,
      paddingHorizontal: 10,
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
    buttons: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    image: { height: "100%", width: "100%", borderRadius: 10 },
    imagesContainer: {
      height: "70%",
      width: "100%",
      borderRadius: 10,
      marginVertical: 5,
      overflow: "hidden",
      backgroundColor: theme ? "#eee" : "#444",
    },
    text: {
      fontFamily: "WorkSans_600SemiBold",
      fontSize: 20,
      textAlign: "center",
      color: theme ? "black" : "#444",
    },
  });
  return (
    <View style={[style, styles.color]}>
      <Text style={styles.text}>{`COLOR&OPACITY EDITOR ${
        colorValue[0] === "#" ? colorValue : colorValue[0].toUpperCase()
      }@${opacityValue * 100}%`}</Text>
      <View style={styles.imagesContainer}>
        <Text style={styles.choosePhotoText}>Wybierz zdjęcie</Text>
        <Image
          source={{ uri: image }}
          style={[styles.image, { tintColor: colorValue }]}
        />
        <Image
          source={{ uri: image }}
          style={[
            styles.image,
            { position: "absolute", opacity: opacityValue },
          ]}
        />
      </View>
      <View style={styles.buttons}>
        {[3, 6, 9].map((i) => (
          <Button
            key={i}
            title={`${i * 10}%`}
            onPress={() => setOpacityValue(i / 10)}
            theme={theme}
          />
        ))}
        {colors &&
          colors.map((i) => (
            <Button
              style={{ backgroundColor: i }}
              key={i}
              title={i}
              onPress={() => setColorValue(i)}
            />
          ))}
      </View>
    </View>
  );
};

export default Color;

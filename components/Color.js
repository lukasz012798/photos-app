import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Color = ({ style, image }) => {
  const [opacityValue, setOpacityValue] = useState(0.3);
  const [colorValue, setColorValue] = useState("red");
  return (
    <View style={[style, styles.color]}>
      <Text
        style={styles.text}
      >{`COLOR&OPACITY EDITOR ${colorValue[0].toUpperCase()}@${
        opacityValue * 100
      }%`}</Text>
      <View style={styles.imagesContainer}>
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
          />
        ))}
        {["tomato", "olive", "royalblue"].map((i) => (
          <Button key={i} title={i} onPress={() => setColorValue(i)} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    backgroundColor: "white",
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
  image: { height: "100%", width: "100%", borderRadius: 10 },
  imagesContainer: {
    height: "70%",
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  text: {
    fontFamily: "WorkSans_600SemiBold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Color;

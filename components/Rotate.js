import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Rotate = ({ style, image }) => {
  const [rotateValue, setRotateValue] = useState(0);
  styles.image2 = {
    transform: [{ rotateZ: `${rotateValue}deg` }],
  };
  return (
    <View style={[style, styles.zoom]}>
      <Text style={styles.text}>{`ROTATE EDITOR ${rotateValue}\u00B0`}</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode={"cover"}
          style={[styles.image, styles.image2]}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.buttons}>
        {[0, 45, 90, 180, 225, 315].map((i) => (
          <Button
            key={i}
            title={`${i}\u00B0`}
            onPress={() => setRotateValue(i)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  zoom: {
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
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    // marginVertical: 5,
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "coral",
  },
  text: {
    fontFamily: "WorkSans_600SemiBold",
    fontSize: 20,
  },
});

export default Rotate;

import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Zoom = ({ style, image }) => {
  const [zoomValue, setZoomValue] = useState(1);
  styles.image2 = { transform: [{ scaleX: zoomValue }, { scaleY: zoomValue }] };
  return (
    <View style={[style, styles.zoom]}>
      <Text style={styles.text}>{`ZOOM EDITOR x${zoomValue}`}</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode={"cover"}
          style={[styles.image, styles.image2]}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.buttons}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Button key={i} title={`${i}`} onPress={() => setZoomValue(i)} />
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
    marginVertical: 5,
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
  },
  text: {
    fontFamily: "WorkSans_600SemiBold",
    fontSize: 20,
  },
});

export default Zoom;

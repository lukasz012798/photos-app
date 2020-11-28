import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Blur = ({ style, image, theme }) => {
  const [blurValue, setBlurValue] = useState(0);
  const styles = StyleSheet.create({
    blur: {
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
    <View style={[style, styles.blur]}>
      <Text style={styles.text}>{`BLUR EDITOR ${blurValue * 10}%`}</Text>
      <View style={styles.imageContainer}>
        {image === null ? (
          <Text style={styles.choosePhotoText}>Wybierz zdjęcie</Text>
        ) : null}
        <Image
          resizeMode={"cover"}
          style={styles.image}
          source={{ uri: image }}
          blurRadius={blurValue}
        />
      </View>
      <View style={styles.buttons}>
        {[0, 2, 4, 6, 8, 10].map((i) => (
          <Button
            key={i}
            title={`${i * 10}%`}
            onPress={() => setBlurValue(i)}
            theme={theme}
          />
        ))}
      </View>
    </View>
  );
};

export default Blur;

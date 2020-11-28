import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "./Button";

const Blur = ({ style, image }) => {
  const [blurValue, setBlurValue] = useState(0);
  return (
    <View style={[style, styles.blur]}>
      <Text style={styles.text}>{`BLUR EDITOR ${blurValue * 10}%`}</Text>
      <Image
        resizeMode={"cover"}
        style={styles.image}
        source={{ uri: image }}
        blurRadius={blurValue}
      />
      <View style={styles.buttons}>
        {[0, 2, 4, 6, 8, 10].map((i) => (
          <Button
            key={i}
            title={`${i * 10}%`}
            onPress={() => setBlurValue(i)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blur: {
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
    height: "70%",
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontFamily: "WorkSans_600SemiBold",
    fontSize: 20,
  },
});

export default Blur;

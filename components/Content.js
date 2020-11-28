import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Blur from "./Blur";
import Color from "./Color";
import Rotate from "./Rotate";
import Zoom from "./Zoom";

const Content = ({ image, colors, theme }) => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: "4%",
      width: "100%",
      backgroundColor: theme ? "lightgray" : "#555",
    },
    rectangle: {
      borderRadius: 5,
      backgroundColor: "#eee",
      height: 600,
      width: "94%",
      marginLeft: "3%",
      marginBottom: "2.5%",
    },
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <Blur theme={theme} image={image} style={styles.rectangle} />
        <Zoom theme={theme} image={image} style={styles.rectangle} />
        <Color
          theme={theme}
          colors={colors}
          image={image}
          style={styles.rectangle}
        />
        <Rotate theme={theme} image={image} style={styles.rectangle} />
      </View>
    </ScrollView>
  );
};

export default Content;

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Blur from "./Blur";
import Color from "./Color";
import Rotate from "./Rotate";
import Zoom from "./Zoom";

const Content = ({ image }) => (
  <ScrollView>
    <View style={styles.container}>
      <Blur image={image} style={styles.rectangle} />
      <Zoom image={image} style={styles.rectangle} />
      <Color image={image} style={styles.rectangle} />
      <Rotate image={image} style={styles.rectangle} />
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    paddingTop: "4%",
    width: "100%",
    backgroundColor: "lightgray",
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

export default Content;

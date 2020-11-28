import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const LeftModal = ({ onPress }) => (
  <View style={styles.modal}>
    <TouchableHighlight onPress={onPress} style={styles.closeButton}>
      <MaterialIcons name="close" size={40} color={"black"} />
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  closeButton: {
    // backgroundColor: "green",
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "tomato",
  },
});

export default LeftModal;

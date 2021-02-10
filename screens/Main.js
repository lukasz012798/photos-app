import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import Content from "../components/Content";
import LeftModal from "../components/LeftModal";

export default Main = ({ onPress, onPressTakePhoto, image }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [colors, setColors] = useState(["tomato", "olive", "royalblue"]);
  const [theme, setTheme] = useState(true);

  const styles = StyleSheet.create({
    iconContainer: {
      // backgroundColor: "blue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5,
    },
    takePhotoIconContainer: {},
    header: {
      // height: 175,
      width: "100%",
      paddingTop: 30,
      paddingBottom: 10,
      backgroundColor: theme ? "#2d78ea" : "#333",
      display: "flex",
      flexDirection: "row",
      // backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      fontFamily: "Roboto_500Medium",
      fontSize: 22,
      color: theme ? "white" : "#999",
    },
    headerTextContainer: {
      // backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      // width: 200,
      flexGrow: 1,
    },
    modal: {
      backgroundColor: "green",
      width: 100,
    },
    modalIconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      // backgroundColor: "green",
    },
  });

  return (
    <>
      <View style={styles.header}>
        <TouchableHighlight
          underlayColor={theme ? "#2d78ea" : "#333"}
          onPress={() => setModalVisible(true)}
        >
          <View style={styles.modalIconContainer}>
            <Entypo name="menu" size={30} color={theme ? "white" : "#999"} />
          </View>
        </TouchableHighlight>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            {image === null ? "Select image" : "Image editor"}
          </Text>
        </View>
        <TouchableHighlight
          onPress={onPress}
          style={styles.iconContainer}
          underlayColor={theme ? "#2d78ea" : "#333"}
        >
          <MaterialIcons
            name="camera-roll"
            size={30}
            color={theme ? "white" : "#999"}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onPressTakePhoto}
          style={[styles.iconContainer, styles.takePhotoIconContainer]}
          underlayColor={theme ? "#2d78ea" : "#333"}
        >
          <MaterialIcons
            name="photo-camera"
            size={35}
            color={theme ? "white" : "#999"}
          />
        </TouchableHighlight>
        <Modal statusBarTranslucent visible={modalVisible}>
          <LeftModal
            colors={colors}
            theme={theme}
            setColors={setColors}
            setTheme={setTheme}
            image={image}
            onPress={() => setModalVisible(false)}
          />
        </Modal>
      </View>
      <Content colors={colors} image={image} theme={theme} />
    </>
  );
};

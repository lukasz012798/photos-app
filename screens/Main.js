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

export default Main = ({ onPress, image }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [colors, setColors] = useState(["tomato", "olive", "royalblue"]);
  const [theme, setTheme] = useState(true);

  const styles = StyleSheet.create({
    addPhotoIconContainer: {
      // backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
    },
    header: {
      // height: 75,
      width: "100%",
      paddingTop: 30,
      paddingBottom: 10,
      backgroundColor: theme ? "#2d78ea" : "#333",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
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
      width: 200,
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
      // backgroundColor: "red",
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
          <Text style={styles.headerText}>Wybierz zdjęcie</Text>
        </View>
        <TouchableHighlight
          onPress={onPress}
          style={styles.addPhotoIconContainer}
          underlayColor={theme ? "#2d78ea" : "#333"}
        >
          <MaterialIcons
            name="add-a-photo"
            size={30}
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

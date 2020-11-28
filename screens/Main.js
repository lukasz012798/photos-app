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
  return (
    <>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => setModalVisible(true)}>
          <View style={styles.modalIconContainer}>
            <Entypo name="menu" size={30} color={"white"} />
          </View>
        </TouchableHighlight>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Wybierz zdjęcie</Text>
        </View>
        <TouchableHighlight
          onPress={onPress}
          style={styles.addPhotoIconContainer}
        >
          <MaterialIcons name="add-a-photo" size={30} color={"white"} />
        </TouchableHighlight>
        <Modal visible={modalVisible}>
          <LeftModal onPress={() => setModalVisible(false)} />
        </Modal>
      </View>
      <Content image={image} />
    </>
  );
};

const styles = StyleSheet.create({
  addPhotoIconContainer: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    // height: 75,
    width: "100%",
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "lightsalmon",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headerText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
    color: "white",
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

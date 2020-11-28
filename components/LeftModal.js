import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const LeftModal = ({ onPress, image, colors, setColors, theme, setTheme }) => {
  const [subMenuColors, setSubMenuColors] = useState(false);
  const [subMenuPath, setSubMenuPath] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const onChangeText = (text) => {
    setTextInputValue(text);
  };
  const styles = StyleSheet.create({
    closeButton: {
      // backgroundColor: "green",
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginTop: 30,
      marginLeft: 10,
    },
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: `${theme ? "#2d78ea" : "#333"}`,
    },
    menuContainer: {
      width: "90%",
      backgroundColor: `${theme ? "#fafafa" : "#333"}`,
      marginTop: "40%",
      borderRadius: 5,
      overflow: "hidden",
      alignSelf: "center",
    },
    menuTile: {
      backgroundColor: `${theme ? "#fff" : "#444"}`,
      padding: 5,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    menuTileEven: {
      backgroundColor: `${theme ? "#fafafa" : "#333"}`,
    },
    subMenuColors: {
      backgroundColor: `${theme ? "#fafafa" : "#444"}`,
      width: "90%",
      alignSelf: "center",
      marginTop: 50,
      borderRadius: 5,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
    text: {
      color: `${theme ? "#333" : "#999"}`,
      // fontFamily: "WorkSans_600SemiBold",
      fontSize: 17,
      marginLeft: 10,
    },
    textInput: {
      width: 100,
      backgroundColor: `${theme ? "#2d78ea" : "#999"}`,
      padding: 5,
      borderRadius: 5,
      marginLeft: 5,
      marginRight: 10,
    },
    themeIcon: {
      position: "absolute",
      right: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={theme ? "#2d78ea" : "#333"}
        onPress={onPress}
        style={styles.closeButton}
      >
        <MaterialIcons name="close" size={40} color={theme ? "#eee" : "#999"} />
      </TouchableHighlight>
      <View style={styles.menuContainer}>
        <TouchableHighlight
          style={styles.menuTile}
          onPress={() => {
            setSubMenuColors(!subMenuColors);
            setSubMenuPath(false);
          }}
          underlayColor={"#ccc"}
        >
          <>
            <MaterialIcons
              name={"format-color-fill"}
              size={30}
              color={theme ? "#444" : "#999"}
            />
            <Text style={styles.text}>Change colors</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.menuTile, styles.menuTileEven]}
          onPress={() => {
            setTheme(!theme);
          }}
          underlayColor={"#ccc"}
        >
          <>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={30}
              color={theme ? "#444" : "#999"}
            />
            <Text style={styles.text}>Switch darkmode</Text>
            {theme !== undefined && (
              <Feather
                name={theme ? "sun" : "moon"}
                size={25}
                color={theme ? "#444" : "#999"}
                style={styles.themeIcon}
              />
            )}
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.menuTile}
          onPress={() => {
            setSubMenuPath(!subMenuPath);
            setSubMenuColors(false);
          }}
          underlayColor={"#ccc"}
        >
          <>
            <MaterialIcons
              name="image"
              size={30}
              color={theme ? "#444" : "#999"}
            />
            <Text style={styles.text}>Show image path</Text>
          </>
        </TouchableHighlight>
      </View>
      {subMenuColors && (
        <View style={styles.subMenuColors}>
          <Text style={styles.text}>Name or hex:</Text>
          <View style={styles.textInput}>
            <TextInput
              autoCapitalize={"characters"}
              value={textInputValue}
              onChangeText={onChangeText}
            ></TextInput>
          </View>
          <TouchableHighlight
            onPress={() => {
              setColors([colors[1], colors[2], textInputValue.toLowerCase()]);
              setTextInputValue("");
            }}
          >
            <MaterialIcons
              name="done"
              size={30}
              color={theme ? "#444" : "#999"}
            />
          </TouchableHighlight>
        </View>
      )}
      {subMenuPath && (
        <View style={styles.subMenuColors}>
          <Text style={styles.text}>
            {image === undefined || image === null
              ? "Select image first"
              : image}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LeftModal;

import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import imageBG from "./assets/image/photoBg.jpeg";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import * as Font from "expo-font";

// const fonts = () =>
//   Font.loadAsync({
//     Roboto400: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     Roboto500: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
//   });

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBG}
        resizeMode="stretch"
        style={styles.bgImage}
      >
        {/* <TextInput style={styles.input} />
      <Button title="Push!" /> */}
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  // input: {
  //   paddingBottom: 15,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   paddingTop: 16,
  //   width: "100%",
  //   backgroundColor: "#F6F6F6",
  //   borderWidth: 1,
  //   borderColor: "#E8E8E8",
  //   borderStyle: "solid",
  //   borderRadius: 8,
  // },
  // button: {
  //   padding: 10,
  // },
});

export default App;

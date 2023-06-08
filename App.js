import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import imageBG from "./assets/image/photoBg.jpeg";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import * as Font from "expo-font";

const fonts = () =>
  Font.loadAsync({
    Roboto400: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBG}
        resizeMode="stretch"
        style={styles.bgImage}
      >
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
});

export default App;

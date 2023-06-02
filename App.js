import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import imageBG from "./src/image/Photo BG-2.jpeg";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBG}
        resizeMode="cover"
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
    color: "#212121",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

import { Button, StyleSheet, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile!</Text>;
};

// const style = StyleSheet.create({
//   main: {
//     backgroundColor: "#212121",
//   },
// });

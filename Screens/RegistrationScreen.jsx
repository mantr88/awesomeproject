import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export const RegistrationScreen = () => {
  const [value, onChangeText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboard}
    >
      <View style={styles.wrap}>
        <View style={styles.avatarWrap}>
          <AntDesign
            name="pluscircleo"
            size={25}
            style={styles.cross}
          />
        </View>
        <Text style={styles.title}>Peєстрація</Text>
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Логін"
          value={value}
          onChangeText={(text) => onChangeText(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          value={value}
          onChangeText={(text) => onChangeText(text)}
        />
        <View style={styles.wrapPswrd}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={value}
            onChangeText={(text) => onChangeText(text)}
          />
          <TouchableOpacity style={styles.passwordShowIndct}>
            <Text style={styles.showPswrd}>Показати</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtn}>
          <Pressable style={styles.submitBtn}>
            <Text style={styles.textBtn}>Зареєстуватися</Text>
          </Pressable>
          <View style={styles.textBox}>
            <Text style={styles.entriesText}>Вже є акаунт?</Text>
            <Text style={styles.entriesLink}> Увійти</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",

    height: "100%",
    width: "100%",
  },
  wrap: {
    position: "relative",
    top: "33%",
    padding: 16,
    flex: 1,
    gap: 16,
    width: "100%",
    alignItems: "center",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  avatarWrap: {
    position: "relative",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  cross: {
    position: "absolute",
    top: "60%",
    left: "90%",

    color: "#FF6C00",
  },
  title: {
    marginTop: -32,
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
  },
  input: {
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    width: "100%",

    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
  },
  wrapPswrd: {
    position: "relative",
    width: "100%",
  },
  passwordShowIndct: {
    position: "absolute",
    top: "45%",
    right: 16,
    transform: [{ translateY: -6 }],
  },
  showPswrd: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  containerBtn: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 27,
    width: "100%",
  },
  submitBtn: {
    position: "relative",
    paddingVertical: 16,
    marginHorizontal: "auto",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  textBtn: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",

    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },
  textBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  entriesText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
  entriesLink: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    textDecorationLine: "underline",

    color: "#1B4371",
  },
});

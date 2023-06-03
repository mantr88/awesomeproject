import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
  return (
    <View style={style.wrap}>
      <View style={style.avatarWrap}>
        <Image />
        <AntDesign name="pluscircleo" size={25} style={style.cross} />
      </View>
      <Text style={style.title}>Peєстрація</Text>
      <TextInput style={style.input} placeholder="Логін"></TextInput>
      <TextInput
        style={style.input}
        placeholder="Адреса електронної пошти"
      ></TextInput>
      <View style={style.wrapPswrd}>
        <TextInput
          style={style.input}
          placeholder="Пароль"
        ></TextInput>
        <TouchableOpacity style={style.passwordShowIndct}>
          <Text style={style.showPswrd}>Показати</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerBtn}>
        <Pressable style={style.submitBtn}>
          <Text style={style.textBtn}>Зареєстуватися</Text>
        </Pressable>
      </View>
      <Text>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const style = StyleSheet.create({
  wrap: {
    position: "relative",
    top: "33%",
    padding: 16,
    flex: 1,
    justifyContent: "flex-start",
    gap: 16,
    width: "100%",
    alignItems: "center",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#fff",
    borderRadius: "25px 25px 0px 0px",
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
    // marginBottom: 16,
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
    // alignItems: "center",
    width: "100%",
  },
  submitBtn: {
    position: "relative",
    paddingVertical: 16,
    marginHorizontal: "auto",
    backgroundColor: "#FF6C00",
    borderRadius: "100px",
  },
  textBtn: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",

    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },
});

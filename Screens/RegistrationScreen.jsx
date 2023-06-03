import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={style.wrap}>
      <View>
        <Image />
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
      <Text>Вже є акаунт? Увійти</Text>
      <Button title="Зареєстуватися" style={style.submitBtn}></Button>
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
    // position: "relative",
    // top: -60,
    // alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    border: 2,
    borderStyle: "solid",
    borderColor: "#ff6347",
  },
  title: {
    marginBottom: 16,
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
  },
  input: {
    // padding: "16px auto 15px 16px ",
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
    top: "40%",
    right: 16,
    transform: [{ translateY: -6 }],
  },
  showPswrd: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  submitBtn: {
    background: "#FF6C00",
    borderRadius: "100px",

    color: "#fff",
  },
});

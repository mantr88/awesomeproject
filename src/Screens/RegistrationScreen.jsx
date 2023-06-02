import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View>
      <Image />
      <Text style={style.title}>Peєстрація</Text>
      <TextInput style={style.input} placeholder="Логін"></TextInput>
      <TextInput
        style={style.input}
        placeholder="Адреса електронної пошти"
      ></TextInput>
      <TextInput style={style.input} placeholder="Пароль"></TextInput>
      <Text>Вже є акаунт? Увійти</Text>
      <Button title="Зареєстуватися"></Button>
    </View>
  );
};

const style = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    background: "#F6F6F6",
    borderWidth: "1px",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
  },
});

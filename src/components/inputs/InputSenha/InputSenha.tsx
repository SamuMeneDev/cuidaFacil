import globalStyles from "@/globalStyles";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import { borderStyle } from "../../borderStyle";
import { styleSenha } from "./styleSenha";

interface InputSenhaProps extends TextInputProps {}

export default function InputSenha({ ...props }: InputSenhaProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={[borderStyle.container, styleSenha.container]}>
      <TextInput
        style={styleSenha.input}
        secureTextEntry={!mostrarSenha}
        {...props}
      />
      <Pressable
        onPress={() => setMostrarSenha(!mostrarSenha)}
        style={styleSenha.eyeContainer}
      >
        <Feather
          name={mostrarSenha ? "eye-off" : "eye"}
          color={globalStyles.azul[600]}
          size={20}
        />
      </Pressable>
    </View>
  );
}

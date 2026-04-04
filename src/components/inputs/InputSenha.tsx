import globalStyles from "@/globalStyles";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import StyleProps from "../../StylesClassProps";

interface InputSenhaProps extends TextInputProps, StyleProps {}

export default function InputSenha({
  boxStyles = `${globalStyles.components.nativeBorder}`,
  inputStyles = ``,
  ...props
}: InputSenhaProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View className={`flex-row justify-between items-center p-1 ${boxStyles}`}>
      <TextInput
        secureTextEntry={!mostrarSenha}
        {...props}
        className={`outline-none w-[90%] ${inputStyles}`}
      />
      <Pressable
        onPress={() => setMostrarSenha(!mostrarSenha)}
        className="flex items-end w-[10%]"
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

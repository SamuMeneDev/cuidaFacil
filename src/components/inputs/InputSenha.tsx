import globalStyles from "@/globalStyles";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TextInputProps, View, Pressable } from "react-native";

interface InputSenhaProps extends TextInputProps {}

export default function InputSenha({...props}: InputSenhaProps) {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <View className="border flex-row justify-between items-center border-indigo-200 p-1 rounded-xl bg-indigo-100">
            <TextInput secureTextEntry={!mostrarSenha} {...props} className="w-[90%]"  />
            <Pressable onPress={()=>setMostrarSenha(!mostrarSenha)} className="flex items-center w-[10%]">
                <Feather name={mostrarSenha?"eye-off":"eye"} color={globalStyles.colors.azul600} size={20} />
            </Pressable>
        </View>
    )
}
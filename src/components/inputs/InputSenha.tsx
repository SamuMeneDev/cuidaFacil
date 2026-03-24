import { TextInput, TextInputProps, View } from "react-native";

interface InputSenhaProps extends TextInputProps {

}

export default function InputSenha({...props}: InputSenhaProps) {
    return (
        <View>
            <TextInput {...props}  />
        </View>
    )
}
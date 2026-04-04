import { TextInput, TextInputProps } from "react-native";
import { borderStyle } from "../borderStyle";
interface InputDefaultProps extends TextInputProps {}

export default function InputDefault({ ...props }: InputDefaultProps) {
  return <TextInput style={borderStyle.container} {...props} />;
}

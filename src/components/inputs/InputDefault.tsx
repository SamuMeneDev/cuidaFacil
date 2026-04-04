import { TextInput, TextInputProps } from "react-native";
import StyleClassProps from "../../StylesClassProps";
import { style } from "./style";

interface InputDefaultProps extends TextInputProps, StyleClassProps {}

export default function InputDefault({
  inputStyles = "",
  ...props
}: InputDefaultProps) {
  return (
    <TextInput
      style={style.container}
      className={`${inputStyles} w-full`}
      {...props}
    />
  );
}

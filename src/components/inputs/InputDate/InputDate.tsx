import { ReactNode } from "react";
import { View } from "react-native";
import MaskInput, { MaskInputProps } from "react-native-mask-input";
import { borderStyle } from "../../borderStyle";
import { styleDate } from "./styleDate";

interface InputDateProps extends MaskInputProps {
  children?: ReactNode;
}

export default function InputDate({
  children = <></>,
  ...props
}: InputDateProps) {
  return (
    <View style={[borderStyle.container, styleDate.container]}>
      <MaskInput style={styleDate.input} {...props} />
      {children}
    </View>
  );
}

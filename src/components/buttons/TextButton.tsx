import StyleClassProps from "@/StylesClassProps";
import { Pressable, PressableProps, Text } from "react-native";
import { styleButton } from "./styleButton";

interface TextButtonProps extends PressableProps, StyleClassProps {
  title?: string;
}

export default function TextButton({ title, ...props }: TextButtonProps) {
  return (
    <Pressable {...props} style={styleButton.container}>
      <Text style={styleButton.text}>{title}</Text>
    </Pressable>
  );
}

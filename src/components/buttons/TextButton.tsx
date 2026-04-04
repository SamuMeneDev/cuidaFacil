import { Pressable, PressableProps, Text } from "react-native";
import { styleButton } from "./styleButton";

interface TextButtonProps extends PressableProps {
  title?: string;
}

export default function TextButton({ title, ...props }: TextButtonProps) {
  return (
    <Pressable {...props} style={styleButton.container}>
      <Text style={styleButton.text}>{title}</Text>
    </Pressable>
  );
}

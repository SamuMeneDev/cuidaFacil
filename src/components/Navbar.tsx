import StyleClassProps from "@/StylesClassProps";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styleNavbar } from "./styleNavbar";

interface NavbarProps extends StyleClassProps {
  pageName: string;
}

export default function Navbar({ ...props }: NavbarProps) {
  return (
    <View style={styleNavbar.container}>
      <Pressable>
        <Feather name="activity" size={24} color={styleNavbar.text.color} />
      </Pressable>
      <Text style={styleNavbar.text}>{props.pageName}</Text>
      <Pressable>
        <Feather name="settings" size={24} color={styleNavbar.text.color} />
      </Pressable>
    </View>
  );
}

import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";
interface LogoProps {
  size?: number;
  color?: string;
  bgColor?: string;
}

export function Logo({
  size = 70,
  color = "white",
  bgColor = "bg-sky-800",
}: LogoProps) {
  return (
    <View
      style={{ padding: 5, width: size, height: size }}
      className={`${bgColor} rounded-lg flex items-center justify-center`}
    >
      <Feather name="activity" size={size - 16} color={color} />
    </View>
  );
}

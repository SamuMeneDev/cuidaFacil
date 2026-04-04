import StyleClassProps from "@/StylesClassProps";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import {
    ColorValue,
    Pressable,
    PressableProps,
    Text,
    View,
} from "react-native";
import { styleCardOption } from "./styleCardOption";

interface CardOptionProps extends StyleClassProps, PressableProps {
  // Título do card
  cardName: string;
  // Nome do ícone
  name: string;
  // Cor do ícone
  color?: ColorValue;
  // Tamanho (px) do ícone
  size?: number;
  // Nome da Biblioteca de ícones correspondente
  type: "ionicons" | "feather" | "fontisto";
}

export default function CardOption({
  boxStyles,
  size = 40,
  color = "black",
  textStyles,
  inputStyles,
  ...props
}: CardOptionProps) {
  // Renderiza o ícone com base nas props
  function handleIcon(
    type: string,
    name: string | any,
    color: ColorValue,
    size: number,
  ) {
    switch (type) {
      case "ionicons":
        return <Ionicons name={name} color={color} size={size} />;
      case "fontisto":
        return <Fontisto name={name} color={color} size={size} />;
      default:
        return <></>;
    }
  }

  return (
    <Pressable
      style={styleCardOption.container}
      {...props}
      className={`${boxStyles}`}
    >
      <View style={styleCardOption.header}>
        <Text style={styleCardOption.headerText} className={`${textStyles}`}>
          {props.cardName}
        </Text>
      </View>
      {/* RENDERIZAÇÃO DO ÍCONE */}
      <View style={styleCardOption.content}>
        {handleIcon(props.type, props.name, color, size)}
      </View>
    </Pressable>
  );
}

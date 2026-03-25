import StyleClassProps from "@/StylesClassProps";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps, View, Text, ColorValue } from "react-native";


interface CardOptionProps extends StyleClassProps, PressableProps {
    // Título do card
    cardName: string,
    // Nome do ícone
    name: string,
    // Cor do ícone
    color?: ColorValue,
    // Tamanho (px) do ícone
    size?: number,
    // Nome da Biblioteca de ícones correspondente
    type: "ionicons" | "feather" | "fontisto"
}

export default function CardOption({boxStyles, size=24, color="black", textStyles="text-2xl", inputStyles, ...props}: CardOptionProps) {
    // Renderiza o ícone com base nas props
    function handleIcon(type: string, name: string | any, color: ColorValue, size: number) {
        switch (type) {
            case "ionicons":
                return <Ionicons name={name} color={color} size={size} />
            case "fontisto":
                return <Fontisto name={name} color={color} size={size} />
            default:
                return <></>
        }
    }
    
    return (
        <Pressable {...props} className={`${boxStyles} w-[40%] h-[40%] justify-center items-center border rounded-xl`} >
            <Text className={`${textStyles}`}>{props.cardName}</Text>
            {/* RENDERIZAÇÃO DO ÍCONE */}
            {handleIcon(props.type, props.name, color, size)}
        </Pressable>
    )
}
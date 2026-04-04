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

export default function CardOption({boxStyles, size=40, color="black", textStyles, inputStyles, ...props}: CardOptionProps) {
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
        <Pressable {...props} className={`${boxStyles} aspect-square w-[40%] h-[40%] items-center border border-stone-300 rounded-xl`} >
            <View className=" w-full h-[25%] items-center rounded-t-xl">
                <Text className={`${textStyles} text-lg`}>{props.cardName}</Text>
            </View>
            {/* RENDERIZAÇÃO DO ÍCONE */}
            <View className="bg-cyan-500 h-[75%] items-center justify-center w-full rounded-b-xl">
                {handleIcon(props.type, props.name, color, size)}
            </View>
        </Pressable>
    )
}
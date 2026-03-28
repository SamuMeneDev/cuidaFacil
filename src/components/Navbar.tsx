import StyleClassProps from "@/StylesClassProps";
import { Feather } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";

interface NavbarProps extends StyleClassProps {
    pageName: string
}

export default function Navbar({...props}: NavbarProps) {
    return (
        <View className={`${props.boxStyles} flex-row items-center justify-between bg-sky-700 p-2 py-3`}>
            <Pressable>
                <Feather name="activity" size={24} color={"white"}  />
            </Pressable>
            <Text className={`${props.textStyles} text-2xl text-white`}>{props.pageName}</Text>
            <Pressable>
                <Feather name="settings" size={20} color={"white"} />
            </Pressable>
        </View>
    )
}
import StyleClassProps from "@/StylesClassProps";
import { ReactNode } from "react";
import { View, Text } from "react-native";
interface ModalHeaderProps extends StyleClassProps {
    title?: string,
    children?: ReactNode
}


export default function ModalHeader({children=<></>,title="", ...props }: ModalHeaderProps) {
    return (
        <View className={`${props.boxStyles} flex-row justify-between p-2`}>
            <Text>{title}</Text>
            {children}
        </View>
    )
}
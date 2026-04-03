import StyleClassProps from "@/StylesClassProps"
import { ReactNode } from "react"
import { View } from "react-native"
interface ModalContentProps extends StyleClassProps {
    children: ReactNode,
}
export default function ModalContent({...props}: ModalContentProps) {
    return (
        <View className={`${props.boxStyles} p-2`}>
            {props.children}
        </View>
    )
}
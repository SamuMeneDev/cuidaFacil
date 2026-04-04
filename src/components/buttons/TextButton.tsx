import { PressableProps, Pressable, Text } from "react-native";
import StyleClassProps from "../../StylesClassProps";
import globalStyles from "@/globalStyles";

interface TextButtonProps extends PressableProps, StyleClassProps {
    title?: string
}

export default function TextButton({title, boxStyles=``, textStyles="text-white text-xl", ...props}: TextButtonProps) {
    return (
        <Pressable {...props} className={`${boxStyles} ${globalStyles.components.nativeBorder} min-w-[30%] flex items-center p-2`}>
            <Text className={`${textStyles}`}>{title}</Text>
        </Pressable>
    )
}
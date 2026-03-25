import { PressableProps, Pressable, Text } from "react-native";

interface TextButtonProps extends PressableProps {
    boxStyles?: string,
    textStyles?: string
}

export default function TextButton({boxStyles="bg-cyan-600 border border-cyan-700  rounded-xl", textStyles="text-white text-xl", ...props}: TextButtonProps) {
    return (
        <Pressable className={`${boxStyles} min-w-[30%] flex items-center p-2`}>
            <Text className={`${textStyles}`}>Logar</Text>
        </Pressable>
    )
}
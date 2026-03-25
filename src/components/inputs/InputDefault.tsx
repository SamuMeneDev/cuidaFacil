import {View, TextInput, TextInputProps} from 'react-native';

interface InputDefaultProps extends TextInputProps {
    boxStyles?: string,
    inputStyles?: string,
}

export default function InputDefault({boxStyles="border-indigo-200 rounded-xl bg-indigo-100", inputStyles="", ...props}: InputDefaultProps) {
    return (
        <View className={`${boxStyles} border flex-row p-1.5 rounded-xl`}>
            <TextInput  className={`${inputStyles} w-full`} {...props} />
        </View>
    )
}
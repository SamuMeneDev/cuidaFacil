import globalStyles from '@/globalStyles';
import {View, TextInput, TextInputProps} from 'react-native';
import StyleClassProps from '../../StylesClassProps';

interface InputDefaultProps extends TextInputProps, StyleClassProps {
}

export default function InputDefault({boxStyles=`${globalStyles.components.nativeBorder}`, inputStyles="", ...props}: InputDefaultProps) {
    return (
        <View className={`${boxStyles} border flex-row p-1.5 rounded-lg`}>
            <TextInput  className={`${inputStyles} w-full`} {...props} />
        </View>
    )
}
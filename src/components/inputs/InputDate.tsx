import globalStyles from '@/globalStyles';
import { ReactNode } from 'react';
import { ButtonProps, View } from 'react-native';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import StyleClassProps from '../../StylesClassProps';

interface InputDateProps extends MaskInputProps, StyleClassProps {
    children?: ReactNode
}

export default function InputDate({boxStyles=`flex-row justify-between ${globalStyles.components.nativeBorder}`, inputStyles="", children=<></>, ...props}: InputDateProps) {
    return (
        <View className={`${boxStyles} p-1 rounded-lg`}>
            <MaskInput className={`${inputStyles} w-full outline-none`} {...props} />
            {children}
        </View>
    )
}
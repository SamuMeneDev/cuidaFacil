import globalStyles from '@/globalStyles';
import { ReactNode } from 'react';
import { View } from 'react-native';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import StyleClassProps from '../../StylesClassProps';

interface InputDateProps extends MaskInputProps, StyleClassProps {
    children?: ReactNode
}

export default function InputDate({boxStyles, inputStyles="", children=<></>, ...props}: InputDateProps) {
    return (
        <View className={`${boxStyles} rounded-lg ${globalStyles.components.nativeBorder} flex-row items-center justify-between px-3 rounded-lg`}>
            <MaskInput className={`${inputStyles} outline-none w-[90%]`} {...props} />
            {children}
        </View>
    )
}
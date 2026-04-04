import globalStyles from '@/globalStyles';
import { ReactNode } from 'react';
import { View } from 'react-native';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import StyleClassProps from '../../StylesClassProps';

interface InputDateProps extends MaskInputProps, StyleClassProps {
    children?: ReactNode
}

export default function InputDate({boxStyles=` ${globalStyles.components.nativeBorder}`, inputStyles="", children=<></>, ...props}: InputDateProps) {
    return (
        <View className={`${boxStyles} flex-row items-center justify-between rounded-lg`}>
            <MaskInput className={`${inputStyles} outline-none`} {...props} />
            {children}
        </View>
    )
}
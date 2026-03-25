import { View } from 'react-native';
import { Picker, PickerProps } from "@react-native-picker/picker";
import globalStyles from '@/globalStyles';
import StyleClassProps from '../StylesClassProps';
import { ReactNode } from 'react';

interface SelectProps extends PickerProps, StyleClassProps {
    children?: ReactNode
}

export default function Select({ ...props}:SelectProps) {
    return (
        <View className={`${globalStyles.components.nativeBorder} p-1.5`}>
            <Picker {...props} className='outline-none bg-indigo-100'>
                {props.children}
            </Picker>
        </View>
    )
}
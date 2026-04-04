import { View } from 'react-native';
import { Picker, PickerProps } from "@react-native-picker/picker";
import globalStyles from '@/globalStyles';
import StyleClassProps from '../StylesClassProps';
import { ReactNode, useEffect, useState } from 'react';
interface List {
    [key:string]: any
}

interface SelectProps extends PickerProps, StyleClassProps {
    labelPropName: string,
    valuePropName: string,
    list: Array<List>
}

export default function Select({ ...props}:SelectProps) {
    const [lista, setLista] = useState(Array<Object>);
    useEffect(()=>{
        setLista(props.list)
    });

    return (
        <View className={`${globalStyles.components.nativeBorder}`}>
            <Picker style={{fontSize: 5}} {...props} className='outline-none bg-indigo-100'>
                {lista.map(item=> (
                    <Picker.Item value={(item as any)[props.valuePropName]} label={(item as any)[props.labelPropName]} />
                ))}
            </Picker>
        </View>
    )
}
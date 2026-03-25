import Feather from '@expo/vector-icons/Feather';
import {View} from 'react-native';
import globalStyles from '../globalStyles';
interface LogoProps {
    size?: number,
    color?: string,
    bgColor?: string
}

export function Logo({size = 70, color = "white", bgColor="bg-sky-900"}: LogoProps) {
    return (
        <View style={{backgroundColor: bgColor, padding: 5, width:size, height:size}} className={`${bgColor} rounded-2xl flex items-center justify-center`}>
            <Feather name="activity" size={size-16} color={color}  />
        </View>
    )
}
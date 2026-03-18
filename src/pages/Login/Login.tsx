import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text} from 'react-native';
export function Login() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View className="bg-cyan-500">
                <Text>Fundo Login</Text>
            </View>
        </SafeAreaView>
    )

}
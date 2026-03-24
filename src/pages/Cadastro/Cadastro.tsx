import { CommonActions, useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cadastro() {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate("Login"))}>
                <Text>Já tem uma conta? Faça Login</Text>
            </Pressable>
        </SafeAreaView>
    )
}
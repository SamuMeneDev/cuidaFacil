import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, TextInput, Pressable, Keyboard} from 'react-native';
import { Logo } from "@/components/Logo";
import { Feather } from "@expo/vector-icons";
import globalStyles from "@/globalStyles";
import { CommonActions, useNavigation } from "@react-navigation/native";
import InputSenha from "@/components/inputs/InputSenha";
import InputDefault from "@/components/inputs/InputDefault";
import TextButton from "@/components/buttons/TextButton";
export function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}} onTouchStart={()=>Keyboard.dismiss()}>
                <View style={{flex:0.2}}>
             
                </View>
                {/* SAUDACOES */}
                <View className="flex items-center gap-3">
                    <Text className="font-semibold text-sky-900 text-xl">Bem Vindo(a) de volta</Text>
                    <Logo />
                    <Text className="text-cyan-800 font-normal text-xl">Faça Login</Text>
                </View>
                <View className="gap-10">
                    {/*CAMPOS*/}
                    <View className="p-2 gap-3">
                        {/* EMAIL */}
                        <InputDefault placeholder="Insira o seu email" />
                        {/* SENHA */}
                        <InputSenha placeholder="Teste" />
                    </View>

                    {/* NÃO TEM UMA CONTA */}
                    <View className="items-center">
                        <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate("Cadastro"))}>
                            <Text className="text-cyan-800 font-normal">Não tem uma conta? Cadastre-se</Text>
                        </Pressable>
                    </View>
                    {/* LOGAR */}
                    <View className="items-center">
                        <TextButton />
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )

}
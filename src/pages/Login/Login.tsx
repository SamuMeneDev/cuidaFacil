import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, TextInput, Pressable, Keyboard} from 'react-native';
import { Logo } from "@/components/Logo";
import { Feather } from "@expo/vector-icons";
import globalStyles from "@/globalStyles";
import { CommonActions, useNavigation } from "@react-navigation/native";
export function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}} onTouchStart={()=>Keyboard.dismiss()}>
                <View style={{flex:0.2}}>
             
                </View>
                {/* SAUDACOES */}
                <View className="flex items-center gap-3">
                    <Text className="font-semibold text-cyan-800 text-xl">Bem Vindo(a) de volta</Text>
                    <Logo />
                    <Text className="text-cyan-800 font-normal text-xl">Faça Login</Text>
                </View>
                <View className="gap-10">
                    {/*CAMPOS*/}
                    <View className="p-2 gap-3">
                        {/* EMAIL */}
                        <View className="border flex-row border-slate-400 p-1 rounded-xl bg-slate-200">
                            <TextInput placeholder="Insira seu e-mail" />
                        </View>
                        {/* SENHA */}
                        <View className="border flex-row justify-between items-center border-slate-400 p-1 rounded-xl bg-slate-200">
                            <TextInput placeholder="Insira sua senha" className="w-[90%]" />
                            <Pressable className="w-[10%]">
                                <Feather name="eye" color={globalStyles.colors.azul600} size={24} />
                            </Pressable>
                        </View>
                    </View>

                    {/* NÃO TEM UMA CONTA */}
                    <View className="items-center">
                        <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate("Cadastro"))}>
                            <Text className="text-cyan-800 font-normal">Não tem uma conta? Cadastre-se</Text>
                        </Pressable>
                    </View>
                    {/* LOGAR */}
                    <View className="items-center">
                        <Pressable className="min-w-[30%] flex items-center bg-cyan-600 border border-cyan-700 p-2 rounded-xl">
                            <Text className="text-white text-xl">Logar</Text>
                        </Pressable>
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )

}
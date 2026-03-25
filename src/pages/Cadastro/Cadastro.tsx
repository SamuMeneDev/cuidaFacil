import TextButton from "@/components/buttons/TextButton";
import InputDate from "@/components/inputs/InputDate";
import InputDefault from "@/components/inputs/InputDefault";
import InputSenha from "@/components/inputs/InputSenha";
import { Logo } from "@/components/Logo";
import Select from "@/components/Select";
import globalStyles from "@/globalStyles";
import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { Masks } from "react-native-mask-input";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cadastro() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 0.2}}>

            </View>
            <View className="p-3 mb-10">
                {/* SAUDACOES */}
                <View className="items-center">
                    <Logo  />
                    <Text className="text-center text-lg font-light text-sky-900">Crie uma conta no Cuida Facil</Text>
                </View>

                {/* CAMPOS */}
                <View className="gap-2">
                    <InputDefault  placeholder="Nome completo" />
                    <InputDefault placeholder="E-mail"/>
                    <InputSenha placeholder="Crie uma senha" />

                    {/* DATA NASC E SEXO */}
                    <View className="flex-row justify-around">
                        {/* DATA NASC */}
                        <View className="w-[45%]">
                            <Text className="text-base font-normal text-sky-900">Data de Nascimento</Text>
                            <InputDate mask={Masks.DATE_DDMMYYYY} >
                                <Feather name="calendar" color={globalStyles.colors.azul600} size={20} />
                            </InputDate>
                        </View>

                        {/* SEXO */}
                        <View className="w-[45%]">
                            <Text>Sexo</Text>
                            <Select>
                                <Picker.Item value="f" label="Feminino" />
                                <Picker.Item value="m" label="Masculino" />
                            </Select>
                        </View>
                    </View>
                </View>
            </View>

            <View className="gap-10 flex-col-reverse">
                <View className="items-center">
                    <TextButton boxStyles="bg-sky-800 border-sky-900" title="Criar Conta" />
                </View>
                
                
                <View className="items-center">
                    <Pressable onPress={()=>navigation.dispatch(CommonActions.navigate("Login"))}>
                        <Text>Já tem uma conta? Faça Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
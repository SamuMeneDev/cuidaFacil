import TextButton from "@/components/buttons/TextButton";
import InputDefault from "@/components/inputs/InputDefault";
import InputSenha from "@/components/inputs/InputSenha/InputSenha";
import { Logo } from "@/components/Logo";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { Keyboard, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} onTouchStart={() => Keyboard.dismiss()}>
        <View style={{ flex: 0.2 }}></View>
        {/* SAUDACOES */}
        <View className="flex items-center gap-3">
          <Text className="font-semibold text-sky-900 text-xl">
            Bem Vindo(a) de volta
          </Text>
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
            <Pressable onPress={() => router.navigate("/cadastro")}>
              <Text className="text-cyan-800 font-normal">
                Não tem uma conta? Cadastre-se
              </Text>
            </Pressable>
          </View>
          {/* LOGAR */}
          <View className="items-center">
            <TextButton
              onPress={() => router.navigate("/home")}
              title="Logar"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

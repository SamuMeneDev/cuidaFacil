import CardOption from "@/components/buttons/CardOption";
import Navbar from "@/components/Navbar";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    const navigator = useNavigation();
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar pageName="Home" />
            <View className="items-center">
                <Text className="text-lg">Olá Fulano, como vai a sua saúde?</Text>
            </View>
            {/* "GRID" COM OS ÍCONES */}
            <View className="p-2 flex-row gap-1 justify-around flex-wrap">
                <CardOption onPress={()=>navigator.dispatch(CommonActions.navigate("Glicemia"))} color={"white"} cardName="Glicemia" type="fontisto" name="blood" />
                <CardOption color={"white"} cardName="Água" type="ionicons" name="water" />
                <CardOption color={"white"} cardName="Alergias" type="ionicons" name="medical-sharp" />
                <CardOption color={"white"} cardName="Emergência" type="ionicons" name="alert-circle" />
            </View>
        </SafeAreaView>
    )
} 
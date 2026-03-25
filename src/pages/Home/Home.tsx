import CardOption from "@/components/buttons/CardOption";
import Navbar from "@/components/Navbar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar pageName="Home" />
            <View className="items-center">
                <Text className="text-lg">Olá Fulano, como vai a sua saúde?</Text>
            </View>
            {/* "GRID" COM OS ÍCONES */}
            <View className="p-2 flex-row gap-1 justify-around flex-wrap">
                <CardOption cardName="Água" type="ionicons" name="water" />
                <CardOption cardName="Alergias" type="ionicons" name="medical-sharp" />
                <CardOption cardName="Emergência" type="ionicons" name="alert-circle" />
                <CardOption cardName="Glicemia" type="fontisto" name="blood" />
            </View>
        </SafeAreaView>
    )
} 
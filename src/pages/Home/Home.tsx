import Navbar from "@/components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar pageName="Home" />
        </SafeAreaView>
    )
}
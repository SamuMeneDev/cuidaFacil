import TextButton from "@/components/buttons/TextButton"
import InputDefault from "@/components/inputs/InputDefault"
import Modal from "@/components/modals"
import Navbar from "@/components/Navbar"
import { Feather } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import { useState } from "react"
import { Pressable, Switch, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Glicemia() {
    const [glicose, setGlicose] = useState<string>();
    const [isObs, setObs] = useState(false);
    const [isJejum, setJejum] = useState(true);
    const [showModal, setShowModal] = useState(false);

    type GlicemiaType = {
        glicose: number,
        data: Date,
        status?: "Diabetes" | "Pré-Dabetes" | "Normal" | "Hipoglicemia",
    }

    function calcularGlicemia() {
        const dados: GlicemiaType = {
            glicose: Number(glicose),
            data: new Date(),
        }
        if(dados.glicose < 70) {
            dados.status = "Hipoglicemia";
        } else if(dados.glicose <= 100) {
            dados.status = "Normal";
        } else {
            dados.status = "Diabetes";
        } 
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar pageName="Glicemia" />
            <View className="p-3">
                {/* FORM */}
                <View className="gap-3">
                    {/* LABEL */}
                    <View className="flex-row gap-3 items-center justify-center">
                        <Text>Digite seu nivel de glicose</Text>
                        {/* INFORMAÇÕES ADICIONAIS */}
                        <Pressable>
                            <Feather name="info" size={24} color={"black "} />
                        </Pressable>
                    </View>
                    {/* TAXA GLICOSE */}
                    <InputDefault value={glicose} onChangeText={(e)=>setGlicose(e)} placeholder="Insira sua taxa de glicose" />
                    {/* ACTIONS */}
                    <View className="flex-row justify-between">
                        <View className="flex-row gap-2">
                            <Checkbox value={isObs} onValueChange={setObs} />
                            <Text>Obs</Text>
                        </View>
                        <View className="flex-row gap-2">
                            <Text>{isJejum?"Jejum":"Pós-prandial"}</Text>
                            <Switch value={isJejum} onValueChange={setJejum} />
                        </View>
                    </View>
                    {/* OBS */}
                    {isObs && <InputDefault placeholder="Observação" />}
                    {/* SALVAR */}
                    <TextButton onPress={()=>setShowModal(true)} boxStyles="bg-sky-600" title="Calcular" />
                    <Modal.root boxStyles="justify-center" animationType="slide" transparent visible={showModal}>
                        <Modal.header title="Resultado" >
                            <Pressable onPress={()=>setShowModal(false)}>
                                <Feather name="x" size={24} />
                            </Pressable>
                        </Modal.header>
                        <Modal.content>
                            
                            <View>
                                <Text>Ois</Text>
                            </View>
                        </Modal.content>
                    </Modal.root>
                </View>
                {/* HISTORICO */}
                <View>
                    <View className="items-center">
                        <Text>Histórico</Text>
                    </View>
                    <View className="border border-stone-500 rounded-lg p-2 items-center">
                        <Text>Nenhum registro feito.</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
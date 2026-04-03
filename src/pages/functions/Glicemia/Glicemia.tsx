import TextButton from "@/components/buttons/TextButton"
import InputDefault from "@/components/inputs/InputDefault"
import Modal from "@/components/modals"
import Navbar from "@/components/Navbar"
import globalStyles from "@/globalStyles"
import { glicemiaStore } from "@/store/glicemia/GlicemiaStore"
import { GlicemiaType, statusGlicemia } from "@/utils/glicemia"
import { Feather, MaterialIcons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import { useEffect, useState } from "react"
import { Alert, FlatList, Pressable, Switch, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Glicemia() {
    const [glicose, setGlicose] = useState<string>();
    const [isObs, setObs] = useState(true);
    const [txObs, setTxObs] = useState("");
    const [isJejum, setJejum] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [historico, setHistorico] = useState<GlicemiaType[]>([]);
    const [result, setResult] = useState<GlicemiaType>({} as GlicemiaType);
    
    function resetInputs() {
        setGlicose("");
        setTxObs("");
    }

    async function calcularGlicemia() {
        const dados: GlicemiaType = {
            id: new Date().getTime().toString(),
            obs: txObs,
            glicose: Number(glicose),
            isJejum,
            data: new Date(),
        }
        if(!dados.glicose) {
            return Alert.alert("Glicose", "Adicione um valor para ser calculado")
        }

        if(isJejum) {
            if(dados.glicose < 70) {
                dados.status = "Hipoglicemia";
                dados.cor = statusGlicemia.hipoglicemia.cor;
                dados.dica = statusGlicemia.hipoglicemia.dica;
            } else if(dados.glicose <= 100) {
                dados.cor = statusGlicemia.normal.cor;
                dados.status = "Normal";
                dados.dica = statusGlicemia.normal.dica;
            } else if(dados.glicose <= 126) {
                dados.cor = statusGlicemia.prediabetes.cor;
                dados.status = "Pré-Diabetes";
                dados.dica = statusGlicemia.prediabetes.dica;
            } else {
                dados.cor = statusGlicemia.diabetes.cor;
                dados.status = "Diabetes";
                dados.dica = statusGlicemia.diabetes.dica;
            }
        } else {
            if(dados.glicose < 70) {
                dados.cor = statusGlicemia.hipoglicemia.cor;
                dados.status = "Hipoglicemia";
            } else if(dados.glicose <= 140) {
                dados.cor = statusGlicemia.normal.cor
                dados.status = "Normal";
            } else if(dados.glicose <= 200) {
                dados.cor = statusGlicemia.prediabetes.cor;
                dados.status = "Pré-Diabetes";
            } else {
                dados.cor = statusGlicemia.diabetes.cor;
                dados.status = "Diabetes";
            }
        }
        

        await glicemiaStore.save(dados);
        await getHistorico();
        setResult(dados);
        setShowModal(true);
        resetInputs();
    }

    async function remove(id: string) {
        glicemiaStore.remove(id);
        await getHistorico();
    }

    function confirmRemove(id: string) {
        Alert.alert("Remover", "Deseja realmente remover esse item?", [
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: async()=>remove(id)}
        ]);
    }

    function handleHistoricoItem(item: GlicemiaType) {
        setResult(item);
        setShowModal(true);
    }

    async function getHistorico() {
        const data = await glicemiaStore.getHistorico();

        setHistorico(data);
    }
    
    useEffect(()=>{
        getHistorico();
    }, [historico])

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
                    <InputDefault maxLength={3} keyboardType="numeric" value={glicose} onChangeText={(e)=>setGlicose(e)} placeholder="Insira sua taxa de glicose" />
                    {/* ACTIONS */}
                    <View className="flex-row justify-between">
                        <View className="flex-row gap-2">
                            <Checkbox value={isObs} onValueChange={setObs} />
                            <Text>Obs</Text>
                        </View>
                        <View className="flex-row gap-2">
                            <Text>{isJejum?"Jejum":"Pós-refeição"}</Text>
                            <Switch value={isJejum} onValueChange={setJejum} />
                        </View>
                    </View>
                    {/* OBS */}
                    {isObs && <InputDefault value={txObs} onChangeText={setTxObs} placeholder="Observação" />}
                    {/* SALVAR */}
                    <TextButton onPress={()=>calcularGlicemia()} boxStyles="bg-sky-600" title="Calcular" />
                    
                    <Modal.root boxStyles="justify-center" animationType="slide" transparent visible={showModal}>
                        {/* HEADER MODAL */}
                        <Modal.header title="Resultado" >
                            <Pressable onPress={()=>setShowModal(false)}>
                                <Feather name="x" color={"#555555"} size={24} />
                            </Pressable>
                        </Modal.header>
                        {/* CONTEUDO MODAL */}
                        <Modal.content>
                            <View className="flex-row gap-2 justify-center">
                                <View className="rounded-lg items-center justify-center" style={{backgroundColor: result.cor, aspectRatio: 1, maxHeight: 64}}>
                                    <Text className="text-white font-bold">{result.glicose}</Text>
                                </View>
                                <Text className="text-stone-800 text-lg font-normal">{result.status}</Text>
                            </View>
                            <View>
                                <Text>Tipo de medição: {result.isJejum?"Jejum":"Pós-Refeição"}</Text>
                            </View>
                            {result.obs && <Text>Obs: {result.obs}</Text>}

                            <Text>Resumo: {result.dica}</Text>
                        </Modal.content>
                    </Modal.root>
                </View>
                {/* HISTORICO */}
                <View>
                    <View className="items-center">
                        <Text>Histórico</Text>
                    </View>
                    <View className="border border-stone-400 rounded-lg p-2">
                        { historico.length < 1?<Text className="self-center text-stone-600">Nenhum registro feito.</Text>:
                        <FlatList
                        data={historico}
                        keyExtractor={item=>item.id}
                        contentContainerStyle={{gap: 4}}
                        renderItem={({item})=> (
                            <TouchableOpacity onPress={()=>handleHistoricoItem(item)} activeOpacity={0.7}>
                                <View className="flex-row items-center gap-2 bg-stone-200 rounded-lg">
                                    <View className="w-[20%] rounded-md items-center justify-center"
                                    style={{ backgroundColor: item.cor, aspectRatio: 1}}>
                                        <Text className="text-white font-bold text-xl">{item.glicose}</Text>
                                    </View>
                                    <View className="w-[80%] p-2">
                                        <View className="flex-row items-center justify-start gap-6">
                                            <Text className="text-xs text-stone-700">
                                                {item.data.toLocaleString().split("T")[0].replaceAll('-', '/')+" "}
                                                {item.data.toLocaleString().split("T")[1].split(".")[0]}
                                            </Text>
                                            <Text className="text-stone-700 text-xs">{item.isJejum?"Jejum":"Pós-refeição"}</Text>
                                        </View>
                                        <View className="flex-row items-center justify-between px-4">
                                            <Text>{item.status}</Text>
                                            {item.obs && <Text className="text-xs" numberOfLines={1}>Obs*</Text>}
                                            <TouchableOpacity onPress={()=>confirmRemove(item.id)}>
                                                <MaterialIcons name="delete" size={24} color={"red"} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>
                        )}
                        />}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
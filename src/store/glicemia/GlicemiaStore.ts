import { GlicemiaType } from "@/utils/glicemia";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@glicemia"


async function getHistorico(): Promise<GlicemiaType[]> {
    try {
        const data = await AsyncStorage.getItem(KEY);
        if(!data) {
            return []
        } else {
            return JSON.parse(data);
        }
    } catch(erro) {
        throw erro;
    }
}

async function save(glicemia: GlicemiaType) {
    try {
        const data = await getHistorico();
        const updated = JSON.stringify([...data, glicemia])
        await AsyncStorage.setItem(KEY, updated);
    } catch(erro) {
        throw erro;
    }
}


async function remove(id: string) {
    try {
        const data = await getHistorico();
        const update = JSON.stringify(data.filter(item=>item.id != id));
        await AsyncStorage.setItem(KEY, update);

    } catch(erro) {
        throw erro;
    }
}
export const glicemiaStore = { save, getHistorico, remove }
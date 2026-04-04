import globalStyles from "@/globalStyles"

export type GlicemiaType = {
        id: string,
        obs?: string,
        dica?: string,
        cor?: string,
        glicose: number,
        isJejum: boolean,
        data: Date,
        status?: "Diabetes" | "Pré-Diabetes" | "Normal" | "Hipoglicemia",
    }
export const statusGlicemia = {
    hipoglicemia: {
        cor: globalStyles.vermelho[950],
        dica: ""
    },
    normal: {
        cor: globalStyles.verde[300],
        dica: ""
    },
    prediabetes: {
        cor: globalStyles.laranja[500],
        dica: ""
    },
    diabetes: {
        cor: globalStyles.vermelho[500],
        dica: ""
    }
}
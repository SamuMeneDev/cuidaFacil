import globalStyles from "@/globalStyles";
import { StyleSheet } from "react-native";

export const styleCardOption = StyleSheet.create({
  container: {
    alignItems: "center",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: globalStyles.ciano[300],
    borderRadius: 8,
    height: "40%",
    width: "40%",
  },
  header: {
    height: "25%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 19,
  },

  content: {
    backgroundColor: globalStyles.azul[400],
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "75%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

import globalStyles from "@/globalStyles";
import { StyleSheet } from "react-native";

export const styleButton = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: globalStyles.ciano[600],
    backgroundColor: globalStyles.ciano[500],
    padding: 4,
    alignItems: "center",
    minWidth: "30%",
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
    color: "#ffffff",
  },
});

import globalStyles from "@/globalStyles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    width: "100%",
    padding: 4,
    backgroundColor: globalStyles.indigo[100],
    borderColor: globalStyles.indigo[200],
  },
});

import globalStyles from "@/globalStyles";
import { StyleSheet } from "react-native";

export const styleNavbar = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.azul[600],
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    color: "#ffffff",
    fontSize: 22,
  },
});

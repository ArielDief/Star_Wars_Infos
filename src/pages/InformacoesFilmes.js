import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function InformacoesFilmes({ navigation }){
  

    return (
        <View style={styles.container} >
          <Text>
              INFORMAÇÃO DOS FILMES
          </Text>
        </View>
        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f58733",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "600",
  },
});

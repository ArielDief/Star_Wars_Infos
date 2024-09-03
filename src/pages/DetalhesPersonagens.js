import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function DetalhesPersonagens({ navigation }) {
  const irParaNaves = () => navigation.navigate("InformacoesNaves");
  const irParaFilmes = () => navigation.navigate("InformacoesFilmes");

  return (
    <View style={[styles.container, { backgroundColor: '#000000' }]}> 
    <Text>
        INFORMAÇÃO DO BONECO

    </Text>
    <TouchableOpacity style={styles.button} onPress={irParaNaves}>
        <Text style={styles.buttonText}>Nave</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={irParaFilmes}>
        <Text style={styles.buttonText}>Filmes</Text>
      </TouchableOpacity>
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
    width: 400,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFF00",
    marginBottom: 10,
  },
  buttonText: {
    color:"#000000",
    fontSize: 22,
    fontWeight: "600",
  },
});

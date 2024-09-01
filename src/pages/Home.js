import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  const irParaDetalhesPersonagens = () => navigation.navigate("DetalhesPersonagens");
  
  


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={irParaDetalhesPersonagens}>
        <Text style={styles.buttonText}>Luke Skywalker</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={irParaDetalhesPersonagens}>
        <Text style={styles.buttonText}>Darth Vader</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={irParaDetalhesPersonagens}>
        <Text style={styles.buttonText}>Han Solo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={irParaDetalhesPersonagens}>
        <Text style={styles.buttonText}>Yoda</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={irParaDetalhesPersonagens}>
        <Text style={styles.buttonText}>Chewbacca</Text>
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

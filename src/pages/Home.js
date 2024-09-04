import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";


export default function Home({ navigation }) {
  const irParaDetalhesPersonagens = (nomePersonagem) => navigation.navigate("DetalhesPersonagens", { nome: nomePersonagem });

  return (


    <View style={[styles.container, { backgroundColor: '#000000' }]}>

      <TouchableOpacity style={styles.button} onPress={() => irParaDetalhesPersonagens("Luke Skywalker")}>
        <Text style={styles.buttonText}>Luke Skywalker</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => irParaDetalhesPersonagens("Darth Vader")}>
        <Text style={styles.buttonText}>Darth Vader</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => irParaDetalhesPersonagens("Han Solo")}>
        <Text style={styles.buttonText}>Han Solo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => irParaDetalhesPersonagens("Yoda")}>
        <Text style={styles.buttonText}>Yoda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => irParaDetalhesPersonagens("Chewbacca")}>
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
    width: 400,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFF00",
    marginBottom: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "600",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

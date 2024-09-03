import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import backgroundImage from '../imagens/imagemFundo.jpg/';
import { ImageBackground } from "react-native-web";

export default function Home({ navigation }) {
  const irParaDetalhesPersonagens = () => navigation.navigate("DetalhesPersonagens");




  return (
    <ImageBackground source= {backgroundImage} style={styles.backgroundImage}>

      <View style={[styles.container]}>

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
    </ImageBackground>

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

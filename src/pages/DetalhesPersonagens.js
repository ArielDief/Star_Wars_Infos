import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";



export default function DetalhesPersonagens({ navigation, route }) {
  const irParaNaves = (personagem) => navigation.navigate("InformacoesNaves", { personagem: personagem });
  const irParaFilmes = (personagem) => navigation.navigate("InformacoesFilmes", { personagem: personagem });
  const { nome } = route.params
  const [persongemSelecionado, setPersonagemSelecionado] = useState(null)

  useEffect(() => {
    obterPersonagem(nome)
  }, [])

  async function obterPersonagem(nomePersonagem) {
    const response = await axios.get(`https://swapi.dev/api/people?search=${nomePersonagem}`)
    console.log(response.data.results[0])
    setPersonagemSelecionado(response.data.results[0])
  }

  if (!persongemSelecionado) {
    return <ActivityIndicator size={"large"} />
  }

  return (
    <View style={[styles.container, { backgroundColor: '#000000' }]}>

      <Text style={styles.text}>Nome: {persongemSelecionado.name}</Text>
      <Text style={styles.text}>Genero: {persongemSelecionado.gender}</Text>
      <Text style={styles.text}>Altura: {persongemSelecionado.height}</Text>
      <Text style={styles.text}>Cor dos Olhos: {persongemSelecionado.eye_color}</Text>
      <Text style={styles.text}>Cor do Cabelo: {persongemSelecionado.hair_color}</Text>
      <Text style={styles.text}>Cor da Pele: {persongemSelecionado.skin_color}</Text>
      <Text style={styles.text}>Peso: {persongemSelecionado.mass}</Text>
      <Text> </Text>

      <TouchableOpacity style={styles.button} onPress={() => irParaNaves(persongemSelecionado)}>
        <Text style={styles.buttonText}>Nave</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => irParaFilmes(persongemSelecionado)}>
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
    color: "#000000",
    fontSize: 22,
    fontWeight: "600",
  },
  text:{
    color:"white",
    fontSize:30,
  },
});

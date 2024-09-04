import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DetalhesPersonagens({ navigation, route }) {
  const irParaNaves = (persongem) => navigation.navigate("InformacoesNaves", { personagem: persongem });
  const irParaFilmes = () => navigation.navigate("InformacoesFilmes");
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
    <View style={[styles.container, { backgroundColor: '#fff' }]}>

      <Text>Nome: {persongemSelecionado.name}</Text>
      <Text>Genero: {persongemSelecionado.gender}</Text>
      <Text>Altura: {persongemSelecionado.height}</Text>
      <Text>Cor dos Olhos: {persongemSelecionado.eye_color}</Text>

      <TouchableOpacity style={styles.button} onPress={() => irParaNaves(persongemSelecionado)}>
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
    color: "#000000",
    fontSize: 22,
    fontWeight: "600",
  },
});

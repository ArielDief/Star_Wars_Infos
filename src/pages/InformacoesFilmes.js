import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InformacoesFilmes({ navigation, route }) {
  const { personagem } = route.params
  const [filmes, setFilmes] = useState(null);

  useEffect(() => {
    obterFilme();
  }, [])

  async function obterFilme() {
    console.log(personagem.films)
    const response = personagem.films.map((film) => axios.get(film))
    const responses = await Promise.all(response)
    console.log(responses)
    setFilmes(responses.map(r => r.data))
  }

  if (!filmes) {
    return <ActivityIndicator size={"large"} />
  }

  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      <Text>Filmes</Text>
      {filmes.map(filme => {
        return (
          <View>

            <Text>Título: {filme.title}</Text>
            <Text>Diretor: {filme.director}</Text>
            <View style={{ borderWidth: 1, width: "100%", marginBottom: 10 }} />

          </View>
        )
      })}
      <Text style={{ color: '#ffffff' }}>
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

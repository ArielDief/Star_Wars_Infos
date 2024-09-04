import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InformacoesNaves({ navigation, route }) {
  const { personagem } = route.params
  const [naves, setNaves] = useState(null);

  useEffect(() => {
    obterNave();
  }, [])

  async function obterNave() {
    console.log(personagem.starships)
    const response = personagem.starships.map((starchip) => axios.get(starchip))
    const responses = await Promise.all(response)
    console.log(responses)
    setNaves(responses.map(r => r.data))
  }

  if (!naves) {
    return <ActivityIndicator size={"large"} />
  }

  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      {naves.map(nave => {
        return (
          <View>
            <Text>{nave.name}</Text>
            <Text>{nave.model}</Text>
            <Text>{nave.crew}</Text>
          </View>
        )
      })}
      <Text style={{ color: '#ffffff' }}>
        INFORMAÇÃO DOS NAVES
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

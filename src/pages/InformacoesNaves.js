import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import
axios from "axios";

export default function
  InformacoesNaves({ navigation, route }) {
  const { personagem } = route.params;
  const [naves, setNaves] = useState(null);

  useEffect(() => {
    obterNave();
  }, []);

  async function obterNave() {
    console.log(personagem.starships);


    if (!personagem.starships || personagem.starships.length === 0) {
      setNaves([]);
      return;
    }

    const response = personagem.starships.map((starship) => axios.get(starship));
    const responses = await Promise.all(response);
    console.log(responses);
    setNaves(responses.map((r) => r.data));
  }

  return (
    <View style={[styles.container, { backgroundColor: '#000000' }]}>
      <Text>NAVES</Text>
      {naves !== null && naves.length > 0 ? (
        naves.map((nave) => (
          <View key={nave.name}> { }
            <Text style={styles.text}>Nome:{nave.name}</Text>
            <Text style={styles.text}>Modelo:{nave.model}</Text>
            <Text style={styles.text}>Equipe:{nave.crew}</Text>
            <Text style={styles.text}>Passageiros:{nave.passengers}</Text>
            <Text>  </Text>
            <View style={{ borderWidth: 1, width: "100%", marginBottom: 10 }} />
          </View>
        ))
      ) : (
        <Text style={styles.text}>Não há naves disponíveis.</Text>
      )}
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
  button:
  {
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
    color:"yellow",
    fontSize:25,
  },
});
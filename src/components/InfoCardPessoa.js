import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function InfoCardPessoa({ label, info }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: </Text>
      <Text style={[styles.info, info ? {} : styles.infoNotInformed]}>
        {info ? info : "Não informado"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
  },
  info: {
    fontSize: 19,
    maxWidth: "90%",
  },
  infoNotInformed: {
    color: "red",
  },
});

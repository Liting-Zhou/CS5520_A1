import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function GameScreen({ startGame }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  console.log("number: ", number);
  return (
    <View style={styles.container}>
      <Text>Restart</Text>
      <View style={styles.card}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    // width: "60%",
  },
  card: {
    backgroundColor: "papayawhip",
    // flex: 0.5,
    padding: 10,
    borderRadius: 5,
    width: "80%",
    minHeight: "20%",
  },
});

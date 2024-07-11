import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function GameScreen({ startGame }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  console.log("number: ", number);
  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 101)); //todo, maybe set to NaN
    startGame(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={handleRestart}></Button>
      </View>

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
  buttonContainer: {
    width: "80%",
    // flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StartScreen from "./screens/StartScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [name, setName] = useState("Test User");
  const [email, setEmail] = useState("test@example.com");
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setConfirmVisible(true);
    console.log("confirmVisible: ", confirmVisible);
  };
  const updateUserName = (name) => {
    setName(name);
  };
  const updateUserEmail = (email) => {
    setEmail(email);
  };
  const handleConfirmVisible = () => {
    setConfirmVisible(false);
  };
  const startGame = (data) => {
    setGameStarted(data);
    setConfirmVisible(false);
    setName("");
    setEmail("");
  };

  return (
    <View style={styles.container}>
      {!gameStarted && (
        <StartScreen
          startHandler={handleStart}
          userName={name}
          updateUserName={updateUserName}
          userEmail={email}
          updateUserEmail={updateUserEmail}
        />
      )}
      {!gameStarted && (
        <ConfirmScreen
          isConfirmVisible={confirmVisible}
          handleConfirmVisible={handleConfirmVisible}
          userName={name}
          userEmail={email}
          startGame={startGame}
        />
      )}
      {gameStarted && <GameScreen startGame={startGame} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function GameScreen({ startGame }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState("");
  const [timer, setTimer] = useState(60);
  const [attempts, setAttempts] = useState(4);
  const [gameState, setGameState] = useState("guessing"); // 'guessing', 'success', 'gameOver'
  console.log("number: ", number);
  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 101)); //todo, maybe set to NaN
    startGame(false);
  };
  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      Alert.alert("Invalid guess", "Please enter a number between 1 and 100.");
      return;
    }
    setAttempts(attempts - 1);
    console.log("guessedNumber: ", guessedNumber);
    if (guessedNumber === number) {
      setGameState("success");
    } else {
      if (attempts - 1 === 0) {
        setGameState("gameOver");
      } else {
        setGameState("guessing");
      }
    }
  };
  const handleNewGame = () => {
    setNumber(Math.floor(Math.random() * 101));
    setGuess("");
    setTimer(60);
    setAttempts(4);
    setGameState("guessing");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={handleRestart}></Button>
      </View>

      {gameState === "guessing" && (
        <View style={styles.card}>
          <Text style={styles.textStyle}>Guess A Number Between 1 & 100</Text>
          <TextInput
            style={styles.textInputStyle}
            value={guess}
            onChangeText={setGuess}
            keyboardType="numeric"
          ></TextInput>
          <Text style={styles.textStyle}>Attempts left: {attempts}</Text>
          <Text style={styles.textStyle}>Timer: {timer}s</Text>
          <Button title="Use a hint" onPress={console.log("")}></Button>
          <Button title="Submit guess" onPress={handleGuess}></Button>
        </View>
      )}
      {gameState === "success" && (
        <View style={styles.card}>
          <Text style={styles.textStyle}>You guessed correct!</Text>
          <Text style={styles.textStyle}>Attempts used: {4 - attempts}</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${number}/100/100` }}
          />
          <Button title="New Game" onPress={handleNewGame}></Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "papayawhip",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    minHeight: "20%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
    // flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
  textStyle: {
    padding: 5,
  },
  textInputStyle: {
    height: 40,
    width: "20%",
    borderColor: "blue",
    borderBottomWidth: 1,
    color: "blue",
    padding: 10,
    marginBottom: 30,
  },
});

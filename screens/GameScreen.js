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
  const [gameState, setGameState] = useState("guessing"); // 'guessing', 'success','guessAgain', 'gameOver'
  console.log("number: ", number);

  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 101)); //todo, maybe set to NaN
    startGame(false);
    setAttempts(4);
    setTimer(60);
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
      console.log("attempts: ", attempts);
      if (attempts - 1 === 0) {
        setGameState("gameOver");
      } else {
        setGameState("guessAgain");
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
  const handleTryAgain = () => {
    setGuess("");
    setGameState("guessing");
  };

  const handleEndGame = () => {
    setGameState("gameOver");
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

      {gameState === "guessAgain" && (
        <View style={styles.card}>
          <Text style={styles.textStyle}>You did not guess correct!</Text>
          <Button title="Try Again" onPress={handleTryAgain}></Button>
          <Button title="End the game" onPress={handleEndGame}></Button>
        </View>
      )}
      {gameState === "gameOver" && (
        <View style={styles.card}>
          <Text style={styles.textStyle}>The game is over!</Text>
          <Image
            source={require("../assets/crying-face.png")}
            style={styles.imageStyle}
          />
          {attempts === 0 && (
            <Text style={styles.textStyle}>You are out of attempts</Text>
          )}
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
  imageStyle: {
    width: 100,
    height: 100,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../colors";

export default function GameScreen({ startGame }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState("");
  const [timer, setTimer] = useState(10);
  const [attempts, setAttempts] = useState(4);
  const [hintUsed, setHintUsed] = useState(false);
  const [gameState, setGameState] = useState("guessing"); // 'guessing', 'success','guessAgain', 'gameOver'
  console.log("number: ", number);

  useEffect(() => {
    if (timer > 0 && gameState !== "success" && gameState !== "gameOver") {
      const interval = setInterval(() => {
        setTimer((currentTimer) => currentTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setGameState("gameOver");
    }
  }, [timer]);

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
      console.log("attempts left: ", attempts);
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
    setHintUsed(false);
  };
  const handleTryAgain = () => {
    setGuess("");
    setGameState("guessing");
  };

  const handleEndGame = () => {
    setGameState("gameOver");
  };

  const handleUseHint = () => {
    hintUsed ? Alert.alert("Hint already used") : setHintUsed(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          colors.backGroundOne,
          colors.backGroundTwo,
          colors.backGroundThree,
        ]}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restart"
          onPress={handleRestart}
          color={colors.buttonNormal}
        ></Button>
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
          {hintUsed && (
            <Text style={styles.hintStyle}>
              Hint:
              {number < 50
                ? " the number is between 1 and 50"
                : " the number is between 50 and 100"}
            </Text>
          )}
          <Text style={styles.textStyle}>Attempts left: {attempts}</Text>
          <Text style={styles.textStyle}>Timer: {timer}s</Text>
          <Button
            title="Use a hint"
            onPress={handleUseHint}
            disabled={hintUsed}
            color={colors.buttonNormal}
          ></Button>
          <Button
            title="Submit guess"
            onPress={handleGuess}
            color={colors.buttonNormal}
          ></Button>
        </View>
      )}
      {gameState === "success" && (
        <View style={styles.card}>
          <Text style={styles.textStyle}>You guessed correct!</Text>
          <Text style={styles.textStyle}>Attempts used: {4 - attempts}</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${number}/100/100` }}
            style={styles.imageStyle}
            alt="image from picsum.photos"
          />
          <Button
            title="New Game"
            onPress={handleNewGame}
            color={colors.buttonNormal}
          ></Button>
        </View>
      )}

      {gameState === "guessAgain" && (
        <View style={styles.card}>
          <Text style={styles.textStyle}>You did not guess correct!</Text>
          <Button
            title="Try Again"
            onPress={handleTryAgain}
            color={colors.buttonNormal}
          ></Button>
          <Button
            title="End the game"
            onPress={handleEndGame}
            color={colors.buttonNormal}
          ></Button>
        </View>
      )}
      {gameState === "gameOver" && (
        <View style={styles.card}>
          <Text style={styles.textStyle}>The game is over!</Text>
          <Image
            source={require("../assets/crying-face.png")}
            style={styles.imageStyle}
            alt="crying face emoji"
          />
          {attempts === 0 && (
            <Text style={styles.textStyle}>You are out of attempts</Text>
          )}
          {timer === 0 && (
            <Text style={styles.textStyle}>You are out of time</Text>
          )}
          <Button
            title="New Game"
            onPress={handleNewGame}
            color={colors.buttonNormal}
          ></Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  card: {
    backgroundColor: colors.cardBackGround,
    padding: 10,
    borderRadius: 5,
    width: "80%",
    minHeight: "20%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "flex-end",
    padding: 10,
  },
  textStyle: {
    padding: 5,
  },
  hintStyle: {
    padding: 5,
    color: colors.blue,
  },
  textInputStyle: {
    height: 40,
    width: "20%",
    borderColor: colors.blue,
    borderBottomWidth: 1,
    color: colors.blue,
    padding: 10,
    marginBottom: 30,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});

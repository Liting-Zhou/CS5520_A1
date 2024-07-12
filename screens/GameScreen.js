import { StyleSheet, Text, View, TextInput, Alert, Image } from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../colors";
import GradientBackground from "../components/GradientBackground";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import ContentText from "../components/ContentText";

export default function GameScreen({ startGame }) {
  const numberAttempts = 4;
  const timerSeconds = 30;
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState("");
  const [timer, setTimer] = useState(timerSeconds);
  const [attempts, setAttempts] = useState(numberAttempts);
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
    setNumber(Math.floor(Math.random() * 101));
    startGame(false);
    setAttempts(numberAttempts);
    setTimer(timerSeconds);
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
    setTimer(timerSeconds);
    setAttempts(numberAttempts);
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
  const hintText =
    "Hint: " +
    (number < 50
      ? "the number is between 1 and 50"
      : "the number is between 50 and 100");

  return (
    <View style={styles.container}>
      <GradientBackground />
      <View style={styles.buttonContainer}>
        <MyButton title={"Restart"} onPress={handleRestart} />
      </View>

      {gameState === "guessing" && (
        <Card style={styles.card}>
          {/* <Text style={styles.textStyle}>Guess A Number Between 1 & 100</Text> */}
          <ContentText text={"Guess A Number Between 1 & 100"} />
          <Input
            value={guess}
            onChangeText={setGuess}
            // keyboardType="numeric"
            inputStyle={styles.textInputStyle}
            // onBlur={() => Keyboard.dismiss()}
          />
          {hintUsed && (
            // <Text style={styles.hintStyle}>
            <ContentText text={hintText} style={styles.hintStyle} />
          )}
          {/* <Text style={styles.textStyle}>Attempts left: {attempts}</Text> */}
          <ContentText text={"Attempts left: " + attempts} />
          {/* <Text style={styles.textStyle}>Timer: {timer}s</Text> */}
          <ContentText text={"Timer: " + timer} />

          <MyButton
            title={"Use a hint"}
            onPress={handleUseHint}
            disabled={hintUsed}
          />
          <MyButton title={"Submit guess"} onPress={handleGuess} />
        </Card>
      )}
      {gameState === "success" && (
        <Card style={styles.card}>
          {/* <Text style={styles.textStyle}>You guessed correct!</Text> */}
          <ContentText text={"You guessed correct!"} />
          {/* <Text style={styles.textStyle}>Attempts used: {4 - attempts}</Text> */}
          <ContentText text={"Attempts used: " + (numberAttempts - attempts)} />
          <Image
            source={{ uri: `https://picsum.photos/id/${number}/100/100` }}
            style={styles.imageStyle}
            alt="image from picsum.photos"
          />
          <MyButton title={"New Game"} onPress={handleNewGame} />
        </Card>
      )}

      {gameState === "guessAgain" && (
        <Card style={styles.card}>
          {/* <Text style={styles.textStyle}>You did not guess correct!</Text> */}
          <ContentText text={"You did not guess correct!"} />
          <MyButton title={"Try Again"} onPress={handleTryAgain} />
          <MyButton title={"End the game"} onPress={handleEndGame} />
        </Card>
      )}
      {gameState === "gameOver" && (
        <Card style={styles.card}>
          {/* <Text style={styles.textStyle}>The game is over!</Text> */}
          <ContentText text={"The game is over!"} />
          <Image
            source={require("../assets/crying-face.png")}
            style={styles.imageStyle}
            alt="crying face emoji"
          />
          {attempts === 0 && (
            // <Text style={styles.textStyle}>You are out of attempts</Text>
            <ContentText text={"You are out of attempts"} />
          )}
          {timer === 0 && (
            // <Text style={styles.textStyle}>You are out of time</Text>
            <ContentText text={"You are out of time"} />
          )}
          <MyButton title={"New Game"} onPress={handleNewGame} />
        </Card>
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

  card: {
    width: "80%",
    minHeight: "10%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "flex-end",
    padding: 10,
  },

  hintStyle: {
    color: colors.blue,
  },
  textInputStyle: {
    width: "20%",
    textAlign: "center",
    marginBottom: 30,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StartScreen from "./screens/StartScreen";
import ConfirmScreen from "./screens/ConfirmScreen";

export default function App() {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const handleStart = () => {
    setConfirmVisible(true);
    console.log("App 11: Start button pressed");
    console.log("confirmVisible: ", confirmVisible);
  };
  return (
    <View style={styles.container}>
      <StartScreen startHandler={handleStart} />
      <ConfirmScreen isConfirmVisible={confirmVisible} />
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

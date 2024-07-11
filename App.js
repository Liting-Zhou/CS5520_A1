import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StartScreen from "./screens/StartScreen";
import ConfirmScreen from "./screens/ConfirmScreen";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleStart = () => {
    setConfirmVisible(true);
    console.log("App 11: Start button pressed");
    console.log("confirmVisible: ", confirmVisible);
  };
  const updateUserName = (name) => {
    setName(name);
  };

  return (
    <View style={styles.container}>
      <StartScreen
        startHandler={handleStart}
        userName={name}
        updateUserName={updateUserName}
      />
      <ConfirmScreen isConfirmVisible={confirmVisible} userName={name} />
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

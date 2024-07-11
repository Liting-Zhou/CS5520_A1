import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React, { useState } from "react";

export default function ConfirmScreen({
  isConfirmVisible,
  handleConfirmVisible,
  userName,
  userEmail,
  startGame,
}) {
  // const handleGoBack = () => {
  //   handleConfirmVisible();
  // };
  return (
    <Modal transparent={true} animationType="slide" visible={isConfirmVisible}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.textStyle}>
            Hello {userName}
            {"\n"}
            Here is the email that you entered:{"\n"}
            {userEmail}
            {"\n"} {"\n"}
            If it is not correct, please go back and enter again.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Go back"
              onPress={handleConfirmVisible}
              color={"darkred"}
            ></Button>
            <Button
              title="Continue"
              onPress={() => startGame(true)}
              color={"dodgerblue"}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "papayawhip",
    flex: 0.3,
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
  textStyle: {
    padding: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

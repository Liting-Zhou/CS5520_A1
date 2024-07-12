import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React, { useState } from "react";
import colors from "../colors";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import ContentText from "../components/ContentText";

export default function ConfirmScreen({
  isConfirmVisible,
  handleConfirmVisible,
  userName,
  userEmail,
  startGame,
}) {
  return (
    <Modal transparent={true} animationType="slide" visible={isConfirmVisible}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.textContainer}>
            <ContentText text={"Hello " + userName + ","} />
            <ContentText text={"Here is the email that you entered:"} />
            <ContentText text={userEmail} />
            <ContentText
              text={
                "\n" + "If it is not correct, please go back and enter again."
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <MyButton
              title={"Go back"}
              onPress={handleConfirmVisible}
              color={colors.darkRed}
            />
            <MyButton title={"Continue"} onPress={() => startGame(true)} />
          </View>
        </Card>
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
    flex: 0.3,
    width: "80%",
  },
  textContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    alignItems: "center",
  },
});

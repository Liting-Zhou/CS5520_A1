import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React, { useState } from "react";
import colors from "../colors";
import Card from "../components/Card";
import MyButton from "../components/MyButton";

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
          <Text style={styles.textStyle}>
            Hello {userName},{"\n"}
            Here is the email that you entered:{"\n"}
            {userEmail}
            {"\n"} {"\n"}
            If it is not correct, please go back and enter again.
          </Text>
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
    // backgroundColor: colors.cardBackGround,
    flex: 0.3,
    // padding: 10,
    // borderRadius: 5,
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

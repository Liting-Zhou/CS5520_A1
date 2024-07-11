import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";

export default function ConfirmScreen({ isConfirmVisible, userName }) {
  return (
    <Modal transparent={true} animationType="slide" visible={isConfirmVisible}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>
            Hello {userName}
            {"\n"}
            Here is the email that you entered:{"\n"}
            {"\n"}
            If it is not correct, please go back and enter again.
          </Text>
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
});

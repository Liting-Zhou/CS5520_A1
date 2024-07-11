import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";

export default function ConfirmScreen({ isConfirmVisible }) {
  return (
    <Modal transparent={true} animationType="slide" visible={isConfirmVisible}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>ConfirmScreen</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "papayawhip",
    flex: 0.3,
    padding: 10,
    borderRadius: 5,
    width: "70%",
  },
});

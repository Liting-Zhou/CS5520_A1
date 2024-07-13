import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../colors";

export default function ErrorMessage({ message }) {
  return <Text style={styles.errorMessage}>{message}</Text>;
}

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.darkRed,
    fontSize: 12,
    padding: 2,
  },
});

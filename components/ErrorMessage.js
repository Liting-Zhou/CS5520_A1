import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function ErrorMessage({ message }) {
  return (
    // <View>
    <Text style={styles.errorMessage}>{message}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.darkRed,
    fontSize: 12,
    padding: 2,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ContentText({ text, style }) {
  return <Text style={[styles.textStyle, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 5,
  },
});

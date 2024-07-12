import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import colors from "../colors";

export default function Input({
  value,
  onChangeText,
  inputStyle,
  keyboardType,
  onBlur,
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.textInputStyle, inputStyle]}
      keyboardType={keyboardType}
      onBlur={onBlur}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderColor: colors.blue,
    borderBottomWidth: 1,
    color: colors.blue,
  },
});

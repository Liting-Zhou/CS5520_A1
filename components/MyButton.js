import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import colors from "../colors";

export default function MyButton({ title, onPress, color, disabled }) {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        onPress={onPress}
        color={color || colors.buttonNormal}
        disabled={disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
  },
});

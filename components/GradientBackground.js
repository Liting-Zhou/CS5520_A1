import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../colors";

export default function GradientBackground() {
  return (
    <LinearGradient
      colors={[
        colors.backGroundOne,
        colors.backGroundTwo,
        colors.backGroundThree,
      ]}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

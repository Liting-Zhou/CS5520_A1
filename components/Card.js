import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackGround,
    // flex: 0.5,
    padding: 10,
    borderRadius: 5,
    // width: "70%",
    // for iOS
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // for Android
    elevation: 5,
  },
});

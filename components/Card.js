import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import colors from "../colors";

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackGround,
    padding: 10,
    borderRadius: 5,
    // shadow for different platforms
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow, //todo: find a better color for shadow
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

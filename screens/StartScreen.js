import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

export default function StartScreen() {
  const [name, setName] = useState("");
  const validateName = () => {
    if (!name || name.length <= 1) {
      console.log("Name must be more than 1 character");
    } else if (/\d/.test(name)) {
      console.log("Name must be non-numeric");
    }
  };
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <View style={styles.card}>
        <View style={styles.topContainer}>
          <Text>Name</Text>
          <TextInput
            style={styles.textInputStyle}
            value={name}
            onChangeText={setName}
            onBlur={validateName}
          ></TextInput>
          <Text>Email address</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
        <View style={styles.robotContainer}>
          <CheckBox disabled={false} />
          <Text>I am not a robot</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            onPress={() => {
              console.log("StartScreen 19");
            }}
            color={"darkred"}
          ></Button>
          <Button
            title="Start"
            onPress={() => {
              console.log("StartScreen 25");
            }}
            color={"ivory"}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    // width: "60%",
  },
  card: {
    backgroundColor: "grey",
    flex: 0.5,
    padding: 10,
    borderRadius: 5,
    width: "70%",
  },
  textInputStyle: {
    height: 40,
    borderColor: "blue",
    borderBottomWidth: 1,
    marginBottom: 30,
    // width: "100%",
    // padding: 5,
  },
  topContainer: {
    flex: 3,
    padding: 10,
  },
  robotContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

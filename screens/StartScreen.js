import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

export default function StartScreen({
  startHandler,
  userName,
  updateUserName,
  userEmail,
  updateUserEmail,
}) {
  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const validateName = () => {
    console.log("validateName: ", userName);
    if (!userName || userName.length <= 1) {
      setErrorMessageName("Name must be more than 1 character");
      return false;
    } else if (/\d/.test(userName)) {
      //if name contains digits
      setErrorMessageName("Name must be non-numeric");
      return false;
    } else {
      setErrorMessageName("");
      return true;
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userEmail || !emailRegex.test(userEmail)) {
      setErrorMessageEmail("Invalid email address");
      return false;
    } else {
      setErrorMessageEmail("");
      return true;
    }
  };

  const handleReset = () => {
    updateUserName("");
    updateUserEmail("");
    setErrorMessageName("");
    setErrorMessageEmail("");
    setToggleCheckBox(false);
  };
  const handleStart = () => {
    const nameValid = validateName();
    const emailValid = validateEmail();
    //if there are no errors, show the confirm screen
    if (nameValid && emailValid && toggleCheckBox) {
      startHandler();
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
            value={userName}
            onChangeText={updateUserName}
            onBlur={validateName}
          ></TextInput>
          {errorMessageName && (
            <Text style={styles.errorMessage}>{errorMessageName}</Text>
          )}
          <Text style={styles.textStyle}>Email address</Text>
          <TextInput
            style={styles.textInputStyle}
            value={userEmail}
            onChangeText={updateUserEmail}
            onBlur={validateEmail}
          ></TextInput>
          {errorMessageEmail && (
            <Text style={styles.errorMessage}>{errorMessageEmail}</Text>
          )}
        </View>
        <View style={styles.robotContainer}>
          <Checkbox value={toggleCheckBox} onValueChange={setToggleCheckBox} />
          <Text style={styles.textStyleRobot}>I am not a robot</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            onPress={() => {
              handleReset();
            }}
            color={"darkred"}
          ></Button>
          <Button
            title="Start"
            onPress={() => {
              handleStart();
            }}
            disabled={toggleCheckBox === false}
            color={"dodgerblue"}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    // width: "60%",
  },
  card: {
    backgroundColor: "papayawhip",
    flex: 0.5,
    padding: 10,
    borderRadius: 5,
    width: "70%",
  },
  textStyle: {
    marginTop: 30,
  },
  textStyleRobot: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderColor: "blue",
    borderBottomWidth: 1,
    color: "blue",
    // marginBottom: 30,
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
  errorMessage: {
    color: "darkred",
    fontSize: 12,
    padding: 2,
  },
});

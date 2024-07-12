import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import colors from "../colors";
import GradientBackground from "../components/GradientBackground";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import ErrorMessage from "../components/ErrorMessage";
import ContentText from "../components/ContentText";

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
      <GradientBackground />

      <Text style={styles.welcomeStyle}>Welcome</Text>
      <Card style={styles.card}>
        <View style={styles.topContainer}>
          {/* <Text>Name</Text> */}
          <ContentText text={"Name"} style={styles.nameTextStyle} />
          <Input
            value={userName}
            onChangeText={updateUserName}
            onBlur={validateName}
          />
          {errorMessageName && <ErrorMessage message={errorMessageName} />}

          {/* <Text style={styles.textStyle}>Email address</Text> */}
          <ContentText text={"Email address"} style={styles.emailTextStyle} />
          <Input
            value={userEmail}
            onChangeText={updateUserEmail}
            onBlur={validateEmail}
          />
          {errorMessageEmail && (
            // <Text style={styles.errorMessage}>{errorMessageEmail}</Text>
            <ErrorMessage message={errorMessageEmail} />
          )}
        </View>
        <View style={styles.robotContainer}>
          <Checkbox value={toggleCheckBox} onValueChange={setToggleCheckBox} />
          {/* <Text style={styles.textStyleRobot}>I am not a robot</Text> */}
          <ContentText
            text={"I am not a robot"}
            style={styles.textStyleRobot}
          />
        </View>
        <View style={styles.buttonContainer}>
          <MyButton
            title={"Reset"}
            onPress={handleReset}
            color={colors.darkRed}
          />
          <MyButton
            title={"Start"}
            onPress={handleStart}
            disabled={toggleCheckBox === false}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 0.5,
    width: "70%",
  },
  welcomeStyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    marginBottom: 30,
    color: colors.blue,
  },
  nameTextStyle: {
    padding: 0,
  },
  emailTextStyle: {
    padding: 0,
  },
  textStyleRobot: {
    padding: 10,
  },
  topContainer: {
    flex: 4,
    padding: 10,
    justifyContent: "space-evenly",
  },
  robotContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const SignInForm = (props) => {
  return (
    <>
      <Input label="Email" icon="mail" iconSize={24} iconPack={Feather} />
      <Input label="Password" icon="lock" iconSize={24} iconPack={Feather} />
      <SubmitButton
        title="Sign In"
        style={styles.submitButton}
        onPress={() => console.log("Button pressed")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
});

export default SignInForm;
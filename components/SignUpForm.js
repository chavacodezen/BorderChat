import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const SignUpForm = props => {
    return (
        <>
            <Input
            label="First Name"
            icon="user-o"
            iconSize={24}
            iconPack={FontAwesome}
            />
            <Input
            label="Last Name"
            icon="user-o"
            iconSize={24}
            iconPack={FontAwesome}
            />
            <Input
            label="Email"
            icon="mail"
            iconSize={24}
            iconPack={Feather}
            />
            <Input
            label="Password"
            icon="lock"
            iconSize={24}
            iconPack={Feather}
            />
            <SubmitButton 
            title="Sign Up"
            style={styles.submitButton}
            onPress={() => console.log("Button pressed")} />
        </>
    )
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
});


export default SignUpForm;
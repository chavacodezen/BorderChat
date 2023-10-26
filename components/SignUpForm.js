import React, { useCallback, useReducer } from "react";
import { StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authActions";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApVL9flFE9Kwz_czMEjWFesAMXIHKqoIc",
  authDomain: "borderchat-c454d.firebaseapp.com",
  projectId: "borderchat-c454d",
  storageBucket: "borderchat-c454d.appspot.com",
  messagingSenderId: "139121179890",
  appId: "1:139121179890:web:e919854b33a353681d246b",
  measurementId: "G-0TSRRDDTX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const initialState = {
  inputValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignUpForm = (props) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    signUp(
      formState.inputValues.firstName,
      formState.inputValues.lastName,
      formState.inputValues.email,
      formState.inputValues.password,
    )
  };

  return (
    <>
      <Input
        id="firstName"
        label="First Name"
        icon="user-o"
        iconSize={24}
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["firstName"]}
      />
      <Input
        id="lastName"
        label="Last Name"
        icon="user-o"
        iconSize={24}
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["lastName"]}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        autoCapitalize="none"
        keyboardType="email-address"
        iconSize={24}
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        autoCapitalize="none"
        secureTextEntry
        iconSize={24}
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["password"]}
      />
      <SubmitButton
        title="Sign Up"
        style={styles.submitButton}
        onPress={authHandler}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
});

export default SignUpForm;

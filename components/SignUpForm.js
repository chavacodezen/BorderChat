import React, { useCallback, useReducer } from "react";
import { StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";

const initialState = {
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
      dispatchFormState({ inputId, validationResult: result });
    },
    [dispatchFormState]
  );

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
        onPress={() => console.log("Button pressed")}
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

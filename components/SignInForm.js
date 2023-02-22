import React, { useCallback, useReducer } from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";

const initialState = {
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false
}

const SignInForm = (props) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({ inputId, validationResult: result })
  }, [dispatchFormState]);

  return (
    <>
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
        title="Sign In"
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

export default SignInForm;
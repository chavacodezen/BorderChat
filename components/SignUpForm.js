import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authActions";
import colors from "../constants/colors";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    if(error) {
      Alert.alert("An error occured", error);
    }
  }, [error]);

  const authHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const action = signUp(
        formState.inputValues.firstName,
        formState.inputValues.lastName,
        formState.inputValues.email,
        formState.inputValues.password
      );
      setError(null);
      await dispatch(action);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, formState]);

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
      {
        isLoading ? 
        <ActivityIndicator 
          size={'small'} 
          color={colors.primary} 
          style={{ marginTop: 20 }}
        /> :
        <SubmitButton
          title="Sign Up"
          style={styles.submitButton}
          onPress={authHandler}
          disabled={!formState.formIsValid}
        />
      }
    </>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
});

export default SignUpForm;

import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PageContainer from "../components/PageContainer";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import colors from "../constants/colors";

const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <PageContainer style={styles.pageContainer}>
        { 
          isSignUp ?
          <SignUpForm /> :
          <SignInForm />
        }

        <TouchableOpacity 
          onPress={() => setIsSignUp(prevState => !prevState)}
          style={styles.linkContainer}>
          <Text style={styles.link}>{ `${isSignUp ? "Already a member? Sign In" : "Not a member? Sign Up"}` }</Text>
        </TouchableOpacity>
      </PageContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  pageContainer: {},
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    fontFamily: 'medium',
    letterSpacing: 0.3,
  },
});

export default AuthScreen;
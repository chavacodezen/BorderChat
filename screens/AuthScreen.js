import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import PageContainer from "../components/PageContainer";
import Input from "../components/Input";

const AuthScreen = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <PageContainer style={styles.pageContainer}>
        <Input
          label="First Name"
          icon="user-o"
          iconSize={24}
          iconPack={FontAwesome}
        />
      </PageContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  pageContainer: {
  },
})

export default AuthScreen;
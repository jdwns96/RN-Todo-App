import React from "react";
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

// component
import DateHeader from "./src/components/DateHeader";
import AddTodo from "./src/components/AddTodo";
import Empty from "./src/components/Empty";

const App = () => {
  return (
    <SafeAreaView style={styles.block}>
      {/* ios, android keyboard issue */}
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : undefined}
        behavior={Platform.select({ ios: "padding", android: undefined })}
        style={styles.avoid}
      >
        <DateHeader />
        <Empty />
        <AddTodo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "#fff", // when in android default background color is not #fff so you should check it out
  },
  avoid: {
    flex: 1,
  },
});

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";

// component
import DateHeader from "./src/components/DateHeader";
import AddTodo from "./src/components/AddTodo";
import Empty from "./src/components/Empty";

const App = () => {
  return (
    <SafeAreaView style={styles.block}>
      <DateHeader />
      <AddTodo />
      <Empty />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

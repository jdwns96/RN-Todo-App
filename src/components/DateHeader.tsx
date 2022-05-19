import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function DateHeader() {
  return (
    <>
      {/* 상단 Status 설정 */}
      <StatusBar backgroundColor="#26a69a" />
      <View style={styles.block}>
        <Text style={styles.dateText}>2022년 5월 3일</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: "#26a69a",
  },
  dateText: {
    fontSize: 24,
    color: "#fff",
  },
});

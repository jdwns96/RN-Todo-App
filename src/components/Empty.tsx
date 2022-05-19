import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>야호! 할일이 없습니다!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // flex 속성 사용시 상위 영역에도 flex 화면 배치가 필요함
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
});

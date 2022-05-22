import React from "react";
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface Props {
  id: number;
  text: string;
  done: boolean;
  onToggle: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const { id, text, done, onToggle } = props;
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>{done && <Image source={require("../assets/icons/check_white/check_white.png")} />}</View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#26a69a",
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26a69a",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#212121",
  },
  lineThrough: {
    color: "#9e9e9e",
    textDecorationLine: "line-through", // 취소선
  },
});

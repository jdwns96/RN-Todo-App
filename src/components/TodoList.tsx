import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

interface Props {
  todos: { id: number; text: string; done: boolean }[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoList(props: Props) {
  const { todos, onToggle, onRemove } = props;
  return <FlatList style={styles.list} data={todos} renderItem={({ item }) => <TodoItem onToggle={onToggle} onRemove={onRemove} {...item} />} keyExtractor={(item) => item.id.toString()} />;
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

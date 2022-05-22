import React, { useState } from "react";
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

// component
import DateHeader from "./src/components/DateHeader";
import AddTodo from "./src/components/AddTodo";
import Empty from "./src/components/Empty";
import TodoList from "./src/components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "hello", done: true },
    { id: 2, text: "hello2", done: false },
    { id: 3, text: "hello3", done: true },
  ]);

  const onInsert = (text: string) => {
    // 아이디 값중 가장 큰 값을 찾아 리턴 후 + 1
    const nextId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = (id: number) => {
    const nextTodos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    setTodos(nextTodos);
  };

  const onRemove = (id: number) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaView style={styles.block}>
      {/* ios, android keyboard issue */}
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : undefined}
        behavior={Platform.select({ ios: "padding", android: undefined })}
        style={styles.avoid}
      >
        <DateHeader />
        {todos.length === 0 ? <Empty /> : <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />}
        <AddTodo onInsert={onInsert} />
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

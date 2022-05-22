import React from "react";
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  id: number;
  text: string;
  done: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const { id, text, done, onToggle, onRemove } = props;

  const remove = () => {
    // 제목, 내용, 버튼 배열, 옵션 객체 순서
    Alert.alert(
      "삭제",
      "정말로 삭제하시겠어요?",
      [
        {
          text: "취소",
          onPress: () => {
            return null;
          },
          style: "cancel",
        },
        {
          text: "삭제",
          onPress: () => {
            onRemove(id);
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          // Alert 이 닫힐때 호출되는 함수
          return null;
        },
      },
    );
  };

  return (
    <View style={styles.item}>
      {/* @caution!! not use to onToggle(id) rendering issue */}
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>{done && <Image source={require("../assets/icons/check_white/check_white.png")} />}</View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={remove}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
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
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, TouchableNativeFeedback, Keyboard } from "react-native";

/**
 *
 * when ios emulator keyboard is not working
 * https://stackoverflow.com/questions/34977588/input-text-doesnt-show-keyboard-on-ios-simulator
 */

/**
 *
 * Touch Effects
 *
 * - TouchableHighlight -> change background color when touching
 * - TouchableNativeFeedback -> show water wave effects in android when you used ios that will be make error
 * - TouchableOpacity -> opacity effect
 * - TouchableWithoutFeedback -> have no effects
 */
export default function AddTodo() {
  const [text, setText] = useState("");

  const onPress = () => {
    setText("");
    Keyboard.dismiss();
  };

  const Button = (
    <View style={styles.buttonStyle}>
      <Image source={require("../assets/icons/add_white/add_white.png")} />
    </View>
  );

  return (
    <View style={styles.block}>
      {/* 
        @returnKeyType 
        common - done, go , next, search, send
        ios - default, emergency-call, google, join, route, yahoo
        android - none, previous
      */}
      <TextInput placeholder="할 일을 입력하세요" value={text} onChangeText={setText} onSubmitEditing={onPress} returnKeyLabel="done" style={styles.input} />
      {Platform.OS === "android" ? (
        <View style={styles.circleWrapper}>
          {/* ^ prevent effect overflow */}
          <TouchableNativeFeedback onPress={onPress}>{Button}</TouchableNativeFeedback>
        </View>
      ) : (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          {Button}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#fff",
    height: 64,
    paddingHorizontal: 16,
    borderColor: "#bdbdbd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    backgroundColor: "#26a69a",
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: "hidden",
    borderRadius: 24,
  },
});

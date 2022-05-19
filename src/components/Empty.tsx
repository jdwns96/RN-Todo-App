import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

/**
 * 아이폰 11 Pro  2436px X 1125px , 화면 밀도 458ppi
 * dp = px * 160 / ppi
 * px = dp * ppi / 160
 */

export default function Empty() {
  return (
    <View style={styles.block}>
      <Image
        source={require("../assets/images/young_and_happy.png")}
        // source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.image}
        resizeMode="cover"
      />
      {/* Image tag resizeMode -> [cover(default), contain, stretch, repeat, center] */}
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
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
});

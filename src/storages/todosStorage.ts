import AsyncStorage from "@react-native-community/async-storage";
/**
 * ios 에서는 용량이 따로 정해져 있지 않다.
 *
 * android 에서는 default 6MB
 * 최대 용량을 늘리고 싶으면 android/gradle.properties 에서
 * AsyncStorage_db_size_in_MB=10
 */

const key = "todos";

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error("No saved todos");
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error("Failed to loads todos");
    }
  },
  async set(data: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error("Failed to save todos");
    }
  },
};

export default todosStorage;

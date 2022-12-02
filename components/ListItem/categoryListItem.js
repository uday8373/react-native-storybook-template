import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CategoryListItem = ({ onPress, title, subTitle }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{subTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "green",
  },
  text: {
    color: "white"
  }
});

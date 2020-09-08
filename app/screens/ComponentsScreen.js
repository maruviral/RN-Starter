import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ComponentsScreen(params) {
  return (
    <View style={styles.container}>
      <Text>Hello There</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 20,
    //alignItems: "center",
    justifyContent: "center",
  },
});

export default ComponentsScreen;

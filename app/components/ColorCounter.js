import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList } from "react-native";

function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColorCounter;

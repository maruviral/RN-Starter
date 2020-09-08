import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList } from "react-native";

function ColorScreen(params) {
  //let counter = 0;
  const [colors, setColors] = useState([]);
  //console.log(colors);

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 100, height: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

function CounterScreen(params) {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this!
          //counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // Don't do this!
          //counter--;
          setCounter(counter - 1);
        }}
      />
      <Text>Counter Count: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;

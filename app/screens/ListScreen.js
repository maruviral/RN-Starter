import React from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";

function ListScreen(params) {
  const friends = [
    { name: "Friend #1", age: 24 },
    { name: "Friend #2", age: 31 },
    { name: "Friend #3", age: 26 },
    { name: "Friend #4", age: 22 },
    { name: "Friend #5", age: 21 },
    { name: "Friend #6", age: 29 },
    { name: "Friend #7", age: 23 },
    { name: "Friend #8", age: 25 },
    { name: "Friend #9", age: 27 },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        //showsHorizontalScrollIndicator={false}
        data={friends}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} - Age : {item.age}
            </Text>
          );
        }}
      ></FlatList>
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
  flatList: {
    top: 30,
  },
});

export default ListScreen;

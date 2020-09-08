//import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./app/screens/ListScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ComponentsScreen from "./app/screens/ComponentsScreen";
import ImageScreen from "./app/screens/ImageScreen";
import CounterScreen from "./app/screens/CounterScreen";
import ColorScreen from "./app/screens/ColorScreen";
import SquareScreen from "./app/screens/SquareScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="ImageDemo" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// app.json -- add below line to start debugger tab in chrome
///* "start": "set BROWSER=%ProgramFiles(x86)%\\Google\\Chrome\\Application\\chrome.exe && expo start"*/

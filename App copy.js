import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import UserInput from "./components/UserInput";


import ImageViewer from "./components/ImageViewer";
import { Box } from "./components/ColoredBox";
// import Button from "./components/Button";

const logo = require("./assets/fan_finder_logo.png");

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

const CatalogScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Catalog</Text>
  </View>
);


export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);



// export default function App() {
//   const [pressedCount, setPressedCount] = useState(0);

//   return (
//     <View style={{ flex: 1, justifyContent: "center" }}>
//       <Text style={{ margin: 16 }}>
//         {pressedCount > 0
//           ? `The button was pressed ${pressedCount} times!`
//           : "The button isn't pressed yet"}
//       </Text>
//       <Button
//         title="Press me"
//         onPress={() => setPressedCount(pressedCount + 1)}
//         disabled={pressedCount >= 3}
//       />

//       <UserInput />

//       <ScrollView style={{ height: 100, width: 50}}>
//         <Box color="red" />
//         <Box color="green" />
//         <Box color="blue" />
//         <Box color="red" />
//         <Box color="green" />
//         <Box color="blue" />
//         <Box color="red" />
      
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 250,
  },
});

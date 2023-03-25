import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './components/AppNavigator';



const App = () => (
  <NavigationContainer>
    <AppNavigator />    
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
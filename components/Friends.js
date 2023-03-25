import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Friends = () => (
    <View style={styles.layout}>
      <Text style={styles.title}>

Friends Here!

      

      </Text>
    </View>
  );

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
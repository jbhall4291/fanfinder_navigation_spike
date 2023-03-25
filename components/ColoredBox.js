import React from 'react';
import { View, Text } from 'react-native';

export const Box = (props) => (
  // Move a box `View` component here
  
    <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);
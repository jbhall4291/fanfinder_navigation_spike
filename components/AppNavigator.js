import React from "react";
import { Gigs } from "./Gigs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProfile } from "./UserProfile";
import { Friends } from "./Friends";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Gigs"
      component={Gigs}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <MaterialCommunityIcons name="map-search" size={28} color="black" />
          );
        },
      }}
    />

<Tab.Screen
      name="Friends"
      component={Friends}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <FontAwesome5 name="user-friends" size={28} color="black" />
          );
        },
      }}
    />

<Tab.Screen
      name="My Profile"
      component={UserProfile}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <MaterialCommunityIcons name="account" size={28} color="black" />
          );
        },
      }}
    />

    
  </Tab.Navigator>
);

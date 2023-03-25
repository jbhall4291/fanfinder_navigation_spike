import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";

export const Gigs = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Map Here!</Text>

    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 51.83113,
        longitude: 1.11618,

        // the two delta values below relate to the default 'zoom' level of map
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

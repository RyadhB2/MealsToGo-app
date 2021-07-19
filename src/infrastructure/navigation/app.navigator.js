import React from "react";
import { ThemeProvider } from "styled-components";
import { View, Text } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Container } from "../../components/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";

import { MapScreen } from "../../features/map/screens/map.screen";

const Settings = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View>
          <Text>This is the Settings Screen</Text>
        </View>
      </Container>
    </ThemeProvider>
  );
};

const Tab = createBottomTabNavigator();

const TAB_ICON = (focused) => ({
  Restaurents: focused ? "md-restaurant" : "md-restaurant-outline",
  Map: focused ? "map" : "map-outline",
  Settings: focused ? "settings" : "settings-outline",
});

export const AppNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = TAB_ICON(focused)[route.name];
            //component to return
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen name="Restaurents" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
};

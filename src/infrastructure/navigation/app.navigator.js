import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { View, Text } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Container } from "../../components/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";

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

const Map = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View>
          <Text>This is the MAP Screen</Text>
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
    <NavigationContainer>
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
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

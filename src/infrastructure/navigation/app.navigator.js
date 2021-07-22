import React from "react";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "../../services/Restaurents/mock/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = (focused) => ({
  Restaurents: focused ? "md-restaurant" : "md-restaurant-outline",
  Map: focused ? "map" : "map-outline",
  Settings: focused ? "settings" : "settings-outline",
});

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

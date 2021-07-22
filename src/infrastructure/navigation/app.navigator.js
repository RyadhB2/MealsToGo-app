import React, { useContext } from "react";
import { Text, Button } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Container } from "../../components/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "../../services/Restaurents/mock/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Settings = () => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <Container>
      <Text>Settings </Text>
      <Text>{user.email} </Text>
      <Button title="logout" onPress={() => onLogout()} />
    </Container>
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
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

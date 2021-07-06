import React from "react";
import { View, Text } from "react-native";

import { RestaurentsScreen } from "./src/features/restaurents/screens/restaurents.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/index";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Container } from "./src/components/utils/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/Restaurents/mock/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

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

  const TAB_ICON = (focused) => ({
    Restaurents: focused ? "md-restaurant" : "md-restaurant-outline",
    Map: focused ? "map" : "map-outline",
    Settings: focused ? "settings" : "settings-outline",
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    iconName = TAB_ICON(focused)[route.name];
                    //component to return
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                })}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "black",
                }}
              >
                <Tab.Screen name="Restaurents" component={RestaurentsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}

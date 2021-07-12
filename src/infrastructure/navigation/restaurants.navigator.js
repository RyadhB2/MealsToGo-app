import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurentsScreen } from "../../features/restaurents/screens/restaurents.screen";
import { TestScreen } from "../../features/restaurents/screens/test.screen";
import { RestaurantDetail } from "../../features/restaurents/screens/restaurant.detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurentsScreen}
      />

      <RestaurantStack.Screen name="TestScreen" component={TestScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};

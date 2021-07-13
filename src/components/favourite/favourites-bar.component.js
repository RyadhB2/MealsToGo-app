import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../features/restaurents/components/compact-restaurant-card.component";
import { Text } from "../typography/text.component";
const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, screen, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              key={key}
              onPress={() => onNavigate("RestaurantDetail", { restaurant })}
            >
              <View style={{ padding: 10 }}>
                <CompactRestaurantInfo
                  screen={screen}
                  restaurant={restaurant}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { FlatList, TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurentInfoCard } from "../../restaurents/components/restaurent-info-card.component";
import styled from "styled-components";

const MessageView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <FlatList
      data={favourites}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <RestaurentInfoCard restaurant={item} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => String(item.name)}
      contentContainerStyle={{ padding: 16 }}
    />
  ) : (
    <MessageView>
      <Text variant="caption">You have no Favourites ...</Text>
    </MessageView>
  );
};

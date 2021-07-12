import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurentInfoCard } from "../components/restaurent-info-card.component";

import { Container } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/Restaurents/mock/restaurants.context";
import { CenterView } from "../../../components/utils/center-view.component";
import { Search } from "../components/searchbar.component";

export const RestaurentsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <Container>
      <Search />
      {isLoading ? (
        <CenterView>
          <ActivityIndicator animating={true} size={50} color={"red"} />
        </CenterView>
      ) : (
        <FlatList
          data={restaurants}
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
      )}
    </Container>
  );
};

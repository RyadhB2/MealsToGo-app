import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurentInfoCard } from "../components/restaurent-info-card.component";
import styled from "styled-components";
import { Container } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/Restaurents/mock/restaurants.context";
import { CenterView } from "../../../components/utils/center-view.component";
import { Search } from "../components/searchbar.component";



export const RestaurentsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <Container>
      <Search />
      {!!isLoading ? (
        <CenterView>
          <ActivityIndicator animating={true} size={50} color={"red"} />
        </CenterView>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurentInfoCard restaurant={item} />}
          keyExtractor={(item) => String(item.name)}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </Container>
  );
};

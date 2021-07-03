import React , {useContext} from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../components/restaurent-info-card.component";
import styled from "styled-components";
import { Container } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/Restaurents/mock/restaurants.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurentsScreen = () => {
  const {restaurants,isLoading,error} = useContext(RestaurantsContext);
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>

      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurentInfoCard restaurant={item} />}
        keyExtractor={(item) =>  String(item.name)}
        contentContainerStyle={{ padding: 16 }}
      />
    </Container>
  );
};

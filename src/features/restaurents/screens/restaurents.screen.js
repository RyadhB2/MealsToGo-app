import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../../../components/restaurent-info-card.component";
import styled from "styled-components";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props)=> props.theme.colors.bg.primary }
  paddingTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: ${(props)=> props.theme.space[3] }
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props)=> props.theme.space[3] }
  background-color: ${(props)=> props.theme.colors.bg.primary }
`;

export const RestaurentsScreen = () => {
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>

      <ListContainer>
        <RestaurentInfoCard />
      </ListContainer>
    </Container>
  );
};


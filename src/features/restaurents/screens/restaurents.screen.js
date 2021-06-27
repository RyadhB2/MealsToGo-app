import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from "react-native";
import { colors } from "../../../utils/colors";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../../../components/restaurent-info-card.component";
import styled from "styled-components";

const Container = styled(SafeAreaView)`
  flex: 1;
  backgroundColor: white;
  paddingTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  backgroundColor: ${colors.listColor};
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


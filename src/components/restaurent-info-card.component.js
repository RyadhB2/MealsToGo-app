import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../infrastructure/theme";

const Title = styled.Text`
  padding: 8px;
  color : ${(props)=> theme.colors.ui.primary }
`;

const RestaurentCard = styled(Card)`
  background-color: white;
`;

const RestaurentCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 8px;
`;

export const RestaurentInfoCard = ({ restaurent = {} }) => {
  const {
    name = "Some Restaurent",
    icon,
    photos = [
      "https://static3.depositphotos.com/1003631/209/i/600/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
    ],
    address = "100 street of foodies",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurent;
  return (
    <RestaurentCard elevation={5}>
      <Card.Content />
      <RestaurentCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurentCard>
  );
};

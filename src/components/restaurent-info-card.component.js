import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../assets/stars";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const RestaurentCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurentCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;

const Infos = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex-direction: row;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  
  return (
    <RestaurentCard elevation={5}>
      <Card.Content />
      <RestaurentCardCover key={name} source={{ uri: photos[0] }} />
      <Infos>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Infos>
    </RestaurentCard>
  );
};

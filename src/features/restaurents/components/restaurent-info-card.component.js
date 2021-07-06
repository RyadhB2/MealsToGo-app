import React from "react";
import { SvgXml } from "react-native-svg";

import { Card } from "react-native-paper";
import styled from "styled-components";

import star from "../../../../assets/stars";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurentInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurent",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://static3.depositphotos.com/1003631/209/i/600/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
    ],
    address = "100 street of foodies",
    isOpenNow = true,
    rating,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Card.Content />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_item, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red" }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

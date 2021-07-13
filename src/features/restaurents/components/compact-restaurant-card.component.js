import React from "react";
import { Image, Text, Platform } from "react-native";
import styled from "styled-components";
import { WebView } from "react-native-webview";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebview = styled(WebView)`
  border-radius: 40px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  border-radius: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android" ? true : false;
export const CompactRestaurantInfo = ({ screen, restaurant }) => {
  const CompactImg =
    screen === "RestaurantScreen"
      ? CompactImage
      : isAndroid
      ? CompactWebview
      : CompactImage;
  return (
    <Item>
      <CompactImg source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};

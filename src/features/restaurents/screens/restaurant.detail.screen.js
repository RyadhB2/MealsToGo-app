import React from "react";
import { RestaurentInfoCard } from "../components/restaurent-info-card.component";

export const RestaurantDetail = ({ route }) => {
  const {restaurant} = route.params;
  return <RestaurentInfoCard restaurant={restaurant} />;
};

import React from "react";
import { CompactRestaurantInfo } from "../../restaurents/components/compact-restaurant-card.component";
export const MapCallout = ({ restaurant, screen }) => {
  return <CompactRestaurantInfo screen={screen} restaurant={restaurant} />;
};

import React from "react";
import { RestaurentInfoCard } from "../components/restaurent-info-card.component";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <>
      <RestaurentInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
          >
            <List.Item title="Eggs" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
          >
            <List.Item title="Burger & Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
          >
            <List.Item title="Spaghetti" />
            <List.Item title="Steak Fries" />
            <List.Item title="Chicken" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Cola" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};

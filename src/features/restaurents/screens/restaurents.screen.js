import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurentInfoCard } from "../components/restaurent-info-card.component";

import { Container } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/Restaurents/mock/restaurants.context";
import { CenterView } from "../../../components/utils/center-view.component";
import { Search } from "../components/searchbar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";
export const RestaurentsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [toggled, setIsToggled] = useState(false);
  //console.log(toggled);
  return (
    <Container>
      <Search
        isFavouritesToggled={toggled}
        onFavouritesToggle={() => setIsToggled(!toggled)}
      />
      {toggled && (
        <View>
          <FavouritesBar
            screen="RestaurantScreen"
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        </View>
      )}
      {isLoading ? (
        <CenterView>
          <ActivityIndicator animating={true} size={50} color={"red"} />
        </CenterView>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <FadeInView>
                  <RestaurentInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => String(item.name)}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </Container>
  );
};

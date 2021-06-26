import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
} from "react-native";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Text>Searchbar</Text>
      </View>

      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    backgroundColor: colors.searchbarColor,
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.listColor,
  },
});

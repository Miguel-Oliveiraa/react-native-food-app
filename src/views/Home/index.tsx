import React, { ReactNode } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import categoriesData from "./assets/mocks/categoriesData";
import popularData from "./assets/mocks/popularData";
import { Header } from "./components/Header";
import styles from "./style";
import colors from "../../assets/colors/colors";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />

      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>

      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      <Categories />
    </View>
  );
}

import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import categoriesData from "./assets/mocks/categoriesData";
import popularData from "./assets/mocks/popularData";
import { Header } from "./components/Header";

import styles from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

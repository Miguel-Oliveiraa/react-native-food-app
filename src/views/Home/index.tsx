import React from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "./components/Header";
import styles from "./style";
import { Categories } from "./components/Categories";
import { Popular } from "./components/Popular";
import { Search } from "./components/Search";

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Search />
        <Categories />
        <Popular />
      </ScrollView>
    </View>
  );
}

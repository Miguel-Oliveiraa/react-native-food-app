import React, { ReactNode } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import popularData from "./assets/mocks/popularData";
import { Header } from "./components/Header";
import styles from "./style";
import colors from "../../assets/colors/colors";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
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

        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => (
            <View
              key={item.id}
              style={[
                styles.popularCardWrapper,
                { marginTop: item.id == 1 ? 10 : 20 },
              ]}
            >
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={colors.primary}
                    />
                    <Text style={styles.popularTopText}>top of the week</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                    <Text style={styles.popularTitlesWeight}>
                      Weight: {item.weight}
                    </Text>
                  </View>
                </View>
                <View style={styles.popularCardBottom}>
                  <View style={styles.addPizzaButton}>
                    <Feather name="plus" size={10} color={colors.textDark} />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <MaterialCommunityIcons
                      name="star"
                      size={10}
                      color={colors.textDark}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularCardRight}>
                <Image source={item.image} style={styles.popularCardImage} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

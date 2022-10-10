import React, { ReactNode } from "react";
import { View, Text, FlatList, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import categoriesData from "../../assets/mocks/categoriesData";

import styles from "./style";
import colors from "../../../../assets/colors/colors";

export default function Categories() {
  const renderCategoryItem = ({ item }: any) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
        key={item.id}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          horizontal={true}
        />
      </View>
    </View>
  );
}

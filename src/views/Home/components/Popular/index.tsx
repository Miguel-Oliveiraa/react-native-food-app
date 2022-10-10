import React from "react";
import { View, Text, Image } from "react-native";
import popularData from "../../assets/mocks/popularData";
import colors from "../../../../assets/colors/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

import styles from "./style";

export function Popular() {
  return (
    <>
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
    </>
  );
}

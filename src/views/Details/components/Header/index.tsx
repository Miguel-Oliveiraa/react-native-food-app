import React from "react";
import { View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import colors from "../../../../assets/colors/colors";

export function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.headerLeft}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </View>
      </TouchableOpacity>
      <View style={styles.headerRigt}>
        <MaterialCommunityIcons name="star" size={12} color={colors.white} />
      </View>
    </View>
  );
}

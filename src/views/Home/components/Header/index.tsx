import React from "react";
import { View, Image, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../../../assets/colors/colors";

import styles from "./style";

export function Header() {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Image
          source={require("../../../../assets/images/profile.png")}
          style={styles.profileImage}
        />
        <Feather name="menu" size={24} color={colors.textDark} />
      </View>
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>
    </View>
  );
}

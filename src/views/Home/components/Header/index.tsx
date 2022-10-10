import React from "react";
import { View, Image } from "react-native";
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
    </View>
  );
}

import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import styles from "./style";
import colors from "../../../../assets/colors/colors";

export function Search() {
  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>
    </View>
  );
}

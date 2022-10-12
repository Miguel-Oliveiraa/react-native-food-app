import { TouchableOpacity, View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../../../assets/colors/colors";

import styles from "./styles";

export function OrderButton() {
  return (
    <TouchableOpacity onPress={() => alert("Your order has been placed!")}>
      <View style={styles.orderWrapper}>
        <Text style={styles.orderText}>Place an order</Text>
        <Feather name="chevron-right" size={18} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
}

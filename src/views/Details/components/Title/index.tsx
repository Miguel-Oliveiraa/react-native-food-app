import { View, Text } from "react-native";
import styles from "./style";

interface Props {
  title: string;
  price: string;
}

export function Title({ title, price }: Props) {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}

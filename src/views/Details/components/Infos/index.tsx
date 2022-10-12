import { View, Text, Image } from "react-native";
import styles from "./styles";

interface Props {
  sizeName: string;
  sizeNumber: number;
  crust: string;
  deliveryTime: number;
  image: number;
}

export function Infos({
  sizeName,
  sizeNumber,
  crust,
  deliveryTime,
  image,
}: Props) {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoLeftWrapper}>
        <View style={styles.infosItemWrapper}>
          <Text style={styles.infoItemTitle}>Size</Text>
          <Text style={styles.infoItemText}>
            {sizeName} {sizeNumber}"
          </Text>
        </View>
        <View style={styles.infosItemWrapper}>
          <Text style={styles.infoItemTitle}>Crust</Text>
          <Text style={styles.infoItemText}>{crust}</Text>
        </View>
        <View style={styles.infosItemWrapper}>
          <Text style={styles.infoItemTitle}>Delivery in</Text>
          <Text style={styles.infoItemText}>{deliveryTime} min</Text>
        </View>
      </View>
      <View>
        <Image source={image} style={styles.itemImage} />
      </View>
    </View>
  );
}

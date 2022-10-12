import { View } from "react-native";
import styles from "./style";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Infos } from "./components/Infos";
import { Ingredients } from "./components/Ingredients";

export function Details({ route }: any) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <Title title={item.title} price={item.price} />
      <Infos
        sizeName={item.sizeName}
        sizeNumber={item.sizeNumber}
        crust={item.crust}
        deliveryTime={item.deliveryTime}
        image={item.image}
      />
      <Ingredients data={item.ingredients} />
    </View>
  );
}

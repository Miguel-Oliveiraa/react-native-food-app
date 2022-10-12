import { View, Text } from "react-native";
import styles from "./style";
import { Header } from "./components/Header";

export function Details({ route }: any) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

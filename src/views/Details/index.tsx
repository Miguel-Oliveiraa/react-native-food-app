import { View, Text } from "react-native";

export function Details({ route }: any) {
  const { item } = route.params;
  console.log(item);

  return (
    <View>
      <Text>Details page</Text>
    </View>
  );
}

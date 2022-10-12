import { View, Text, FlatList, Image } from "react-native";
import colors from "../../../../assets/colors/colors";
import styles from "./styles";

interface Props {
  id: string;
  name: string;
  image: number;
}

interface Dados {
  data: Props[];
}

export function Ingredients({ data }: Dados) {
  return (
    <View style={styles.ingredientsWrapper}>
      <Text style={styles.ingredientsTitle}>Ingredients</Text>
      <View style={styles.ingredientsListWrapper}>
        <FlatList
          data={data}
          renderItem={renderIngredientsItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const renderIngredientsItem = ({ item }: any) => {
  return (
    <View
      style={[
        styles.ingredientsItemWrapper,
        { marginLeft: item.id == "1" ? 20 : 0 },
      ]}
    >
      <Image source={item.image} style={styles.ingredientsImage} />
    </View>
  );
};

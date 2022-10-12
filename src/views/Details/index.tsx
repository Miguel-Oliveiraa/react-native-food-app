import { View, FlatList, Text, Image } from "react-native";
import styles from "./style";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Infos } from "./components/Infos";
import colors from "../../assets/colors/colors";

export function Details({ route }: any) {
  const { item } = route.params;

  const renderIngredientsItem = ({ item }: any) => {
    return (
      <View
        style={[
          {
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
            marginRight: 15,
            borderRadius: 15,
            marginVertical: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          },
          { marginLeft: item.id == "1" ? 20 : 0 },
        ]}
      >
        <Image source={item.image} style={{ resizeMode: "contain" }} />
      </View>
    );
  };

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

      <View
        style={{
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: colors.textDark,
            fontFamily: "Montserrat-Bold",
            fontSize: 16,
            paddingHorizontal: 20,
          }}
        >
          Ingredients
        </Text>
        <View style={{ paddingVertical: 10 }}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

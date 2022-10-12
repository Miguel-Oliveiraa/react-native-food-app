import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors";

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: colors.textDark,
    width: "50%",
  },
  priceWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  price: {
    color: colors.price,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 32,
  },
});

export default styles;

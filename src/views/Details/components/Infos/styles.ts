import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors";

const styles = StyleSheet.create({
  infoWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infosItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    color: colors.textLight,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  infoItemText: {
    color: colors.textDark,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 50,
  },
});

export default styles;

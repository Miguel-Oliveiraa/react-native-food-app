import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors";

const styles = StyleSheet.create({
  searchWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  search: {
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
    flex: 1,
    marginLeft: 10,
  },
  searchText: {
    color: colors.textLight,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default styles;

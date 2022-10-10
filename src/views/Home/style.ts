import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import colors from "../../assets/colors/colors";

const statusBarHeight = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },

  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    color: colors.textDark,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  titlesTitle: {
    color: colors.textDark,
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    marginTop: 5,
  },

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

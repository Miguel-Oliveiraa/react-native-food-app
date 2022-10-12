import { StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../../../../assets/colors/colors";

const statusBarHeight = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: statusBarHeight,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    borderRadius: 40,
    height: 40,
    width: 40,
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
});

export default styles;

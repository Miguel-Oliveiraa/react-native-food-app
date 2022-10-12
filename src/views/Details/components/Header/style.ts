import { StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../../../../assets/colors/colors";

const statusBarHeight = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: statusBarHeight,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderRadius: 10,
    borderWidth: 2,
    padding: 12,
  },
  headerRigt: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    padding: 12,
  },
});

export default styles;

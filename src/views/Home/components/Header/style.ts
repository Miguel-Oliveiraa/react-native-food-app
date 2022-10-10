import { StyleSheet, StatusBar, Platform } from "react-native";

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
});

export default styles;

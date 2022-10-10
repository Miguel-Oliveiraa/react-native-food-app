import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import colors from "../../assets/colors/colors";

const statusBarHeight = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
});

export default styles;

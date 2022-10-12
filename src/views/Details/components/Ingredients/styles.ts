import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors";

const styles = StyleSheet.create({
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    color: colors.textDark,
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  ingredientsListWrapper: {
    paddingVertical: 10,
  },
  ingredientsItemWrapper: {
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
  ingredientsImage: {
    resizeMode: "contain",
  },
});

export default styles;

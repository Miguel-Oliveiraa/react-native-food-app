import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors";

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingBottom: 20,
    paddingTop: 15,
  },
  categoryItemWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  categoryItemImage: {
    alignSelf: "center",
    height: 60,
    marginHorizontal: 20,
    marginTop: 25,
    width: 60,
  },
  categoryItemTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
  categorySelectWrapper: {
    alignSelf: "center",
    borderRadius: 25,
    height: 26,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    width: 26,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
});

export default styles;

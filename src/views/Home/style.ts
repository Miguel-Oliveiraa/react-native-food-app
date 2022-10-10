import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: "row",
    overflow: "hidden",
    paddingLeft: 20,
    paddingTop: 24,
  },
  popularTopWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  popularTopText: {
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 10,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    color: colors.textDark,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  popularTitlesWeight: {
    color: colors.textLight,
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    marginTop: 5,
  },
  popularCardBottom: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: -20,
    marginTop: 10,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },
  rating: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});

export default styles;

import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");
const CARD_W = width * 0.9;
const CARD_H = CARD_W * 3.0;

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#001F3F",
  },
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "LuckiestGuy",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    textAlign: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(197, 217, 253, 0.52)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 4,
    borderColor: "#8FB7FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 38,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001F3F",
    marginTop: 220,
  },
  fabBackground: {
    position: "absolute",
    bottom: 55,
    right: 28,
  },
  addButton: {
    backgroundColor: "#8FB7FF",
    width: 55,
    height: 55,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 100,
    marginTop: 91,
    borderColor: "red",
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  cardImage: {
    width: 60,
    height: 80,
    borderRadius: 8,
    marginRight: 17,
  },

  cardInfo: {
    flex: 1,
  },

  cardText: {
    fontSize: 14,
    color: "#001F3F",
    marginBottom: 6,
  },

  bold: {
    fontWeight: "bold",
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,
  },

  icon: {
    width: 5,
    height: 24,
  },
});

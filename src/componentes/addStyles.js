import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  backgroundImage: {
    borderRadius: 30,
  },
  title: {
    fontSize: 39,
    fontFamily: "LuckiestGuy",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    textAlign: "center",
    padding: 10,
    marginTop: 70,
  },
  icon: {
    width: 106,
    height: 106,
    marginBottom: 5,
    marginTop: 20,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#8FB7FF",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "rgba(197, 217, 253, 0.69)",
    color: "#000",
    fontWeight: "bold",
  },
  previewImage: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 50,
    gap: 10,
  },
  button: {
    backgroundColor: "#8FB7FF",
    paddingVertical: 10,
    paddingHorizontal: 27,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

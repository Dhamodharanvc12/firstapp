import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { RootStackParamList } from "../App";

const categories = [
  { id: 1, name: "Reduce Stress", image: require("../assets/reduceStress.png") },
  { id: 2, name: "Improve Performance", image: require("../assets/improvePerformance.png") },
  { id: 3, name: "Increase Happiness", image: require("../assets/increaseHappiness.png") },
  { id: 4, name: "Reduce Anxiety", image: require("../assets/reduceAnxiety.png") },
  { id: 5, name: "Personal Growth", image: require("../assets/personalGrowth.png") },
  { id: 6, name: "Better Sleep", image: require("../assets/betterSleep.png") },
];

export default function CategorySelection() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>What Brings You</Text>
      <Text style={styles.text}>to Silent Moon?</Text>
      <Text style={styles.subText}>Choose a topic to focus on:</Text>

      <View style={styles.grid}>
        {categories.map((cat) => (
          <Pressable key={cat.id} style={styles.card} onPress={()=>navigation.navigate("MeditationSetting")}>
            <Image source={cat.image} style={styles.image} />
            <Text style={styles.categoryText}>{cat.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  boldText: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: "#656464",
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: "#999",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#e2dfdf",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

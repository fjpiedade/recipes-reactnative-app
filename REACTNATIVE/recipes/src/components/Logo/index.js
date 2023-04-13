import { Text, StyleSheet } from "react-native";
import { View } from "moti";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function Logo() {
  return (
    <View
      style={styles.logoSpace}
      from={{
        opacity: 0,
        translateX: -50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        type: "spring",
        duration: 850,
      }}
    >
      <Text style={styles.letter}>Easy Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoSpace: {
    backgroundColor: "#4CBE6C",
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 32,
    marginBottom: 8,
  },
  letter: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Logo } from "../../components/Logo";

export function Home() {
  const [inputSearch, setInputSearch] = useState('');

  function handleSearch() {
    console.log("Search button clicked!");
    console.log(inputSearch)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Find Recipes</Text>
      <Text style={styles.title}>Combine with you</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Insert the name what do u want ..."
          style={styles.input}
          value={inputSearch}
          onChangeText={(txt) => setInputSearch(txt)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" color="#4CBE6C" size={28} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ECECEC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8,
  },
  input: {
    width: "90%",
    height: 54,
    maxWidth: "90%",
  },
});

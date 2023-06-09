import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { Text as MotiText } from "moti";

import api from "../../services/api";
import { Logo } from "../../components/Logo";
import { FoodList } from "../../components/FoodList";

export function Home() {
  const [inputSearch, setInputSearch] = useState("");
  const [foods, setFoods] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // console.log("Loading the data")
    async function fetchApi() {
      const response = await api.get("foods");
      //console.log(response.data)
      setFoods(response.data);
    }
    fetchApi();
  }, []);

  function handleSearch() {
    if (inputSearch === "") {
      return;
    }

    let input = inputSearch;
    setInputSearch("");
    navigation.navigate("Search", { searchText: inputSearch });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <MotiText
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 15,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          delay: 100,
          type: "timing",
          duration: 650,
        }}
      >
        Find Recipes ...
      </MotiText>
      <MotiText
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 20,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          delay: 200,
          type: "timing",
          duration: 850,
        }}
      >
        Combine with you
      </MotiText>

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

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        showsVerticalScrollIndicator={false}
      />
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

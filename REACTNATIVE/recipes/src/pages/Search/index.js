import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
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
import { useIsFocused } from "@react-navigation/native";

import { Logo } from "../../components/Logo";
import api from "../../services/api";
import { FoodList } from "../../components/FoodList";

export function Search() {
  const route = useRoute();
  const [listOfRecipes, setListOfRecipes]=useState([]);

  useEffect(() => {
    async function fetchRecipes(){
      const response = await api.get(`/foods?name_like=${route.params?.searchText}`)
      setListOfRecipes(response.data)
    }

    fetchRecipes();
  }, [route.params?.searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>
        Search Results {route.params?.searchText}
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={listOfRecipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={()=> <Text style={styles.text}>We not founded what you are looking for...</Text>}
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
    marginBottom: 14,
  },
  text:{
    fontSize:16,
  }
});

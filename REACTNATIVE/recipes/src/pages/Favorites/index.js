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
import { useIsFocused } from "@react-navigation/native";

import { Logo } from "../../components/Logo";
import { FoodList } from "../../components/FoodList";
import { getListOfFavorites } from "../../utils/storage";

export function Favorites() {
  const [recipes, setRecipes] = useState([]);
  const isFocused = useIsFocused()

  useEffect(() => {

    let isActive = true;

    async function getRecipesFromFavoriteList(){
      const result = await getListOfFavorites("@easyrecipes")
      if(isActive){
        setRecipes(result)
      }
    }

    if(isActive){
      getRecipesFromFavoriteList()
    }

    return()=>{
      isActive=false
    }
  }, [isFocused]);

  function handleSearch() {
    console.log("Search button clicked!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Favorites Recipes</Text>
      {
        recipes.length === 0 && (
          <Text>Not Found Favorites Recipes in your List</Text>
        )
      }
      <FlatList
        data={recipes}
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
    marginBottom: 14,
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

import AsyncStorage from "@react-native-async-storage/async-storage";

//retrieves favorites list of recipes
export async function getListOfFavorites(key) {
  const favorites = await AsyncStorage.getItem(key);
  // console.log("show all recipe on favorite list");
  return JSON.parse(favorites) || [];
}

//save new recipe to favorite list
export async function saveNewItemToFavoriteList(
  key,
  newRecipeToSaveOnFavoriteList
) {
  let myFavorites = await getListOfFavorites(key);
  let hasItem = myFavorites.some(
    (item) => item.id === newRecipeToSaveOnFavoriteList.id
  );
  if (hasItem) {
    // console.log("Recipe already Exist On The Favorite List");
    return;
  }

  myFavorites.push(newRecipeToSaveOnFavoriteList);
  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
  // console.log("Recipe saved successfully On The Favorite List");
}

//remove Item/Recipe from favorites list
export async function removeItemFromFavoriteList(id) {
  let listOfFavoriteRecipes = await getListOfFavorites("@easyrecipes");
  let myFavorites = listOfFavoriteRecipes.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@easyrecipes", JSON.stringify(myFavorites));
  // console.log("Item/Recipe deleted Successfully!");
  return myFavorites;
}

//check if recipe is favorites
export async function isFavorite(recipe) {
  let myRecipes = await getListOfFavorites("@easyrecipes");
  const favorite = myRecipes.find((item) => item.id === recipe.id);
  if (favorite) {
    return true;
  }

  return false;
}

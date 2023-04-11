import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { Ingredients } from "../../components/Ingredients";
import {Instructions } from "../../components/Instructions";

export function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Details of Recipe",
      headerRight: () => (
        <Pressable onPress={()=> console.log('Details')}>
          <Entypo name="heart" size={28} color="#FF4141" />
        </Pressable>
      ),
    });
  }, [navigation, route.params?.data]);
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 14}} style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable>
        <View style={styles.playIcon}>
            <AntDesign name="playcircleo" size={80} color="#FAFAFA" />
        </View>
        <Image 
            source={{uri: route.params?.data.cover}}
            style={styles.cover}
        />
      </Pressable>
      <View style={styles.headerDetails}>
        <View>
            <Text style={styles.title} >{route.params?.data.name}</Text>
            <Text style={styles.ingredientsText}>Ingredients ({route.params?.data.total_ingredients})</Text>
        </View>
        <Pressable>
            <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>
    
      {
        route.params?.data.ingredients.map((item)=>(
            <Ingredients key={item.id} data={item} />
        ))
      }
    <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Method of Preparation</Text>
        <Feather name="arrow-down" size={24} color="#FFF" />
    </View>
      {
        route.params?.data.instructions.map((item, index)=>(
            <Instructions key={item.id} data={item} index={index} />
        ))
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FF",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover:{
    width: '100%',
    height: 200,
    borderRadius: 14,
  },
  playIcon:{
    position: 'absolute',
    zIndex: 9,
    top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:14,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 14,
    color: "#000",
    marginBottom: 4,
  },
  ingredientsText:{
    marginBottom: 14,
    fontSize: 16,
  },
  instructionsArea:{
    backgroundColor:"#4CBE6C",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  instructionsText:{
    fontSize: 18,
    fontWeight: 500,
    color: '#FFF',
  }
});

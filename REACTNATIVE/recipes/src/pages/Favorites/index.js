import {View, Text, StyleSheet, SafeAreaView } from 'react-native';

export function Favorites() {
  return(
    <SafeAreaView style={styles.container}>
        <Text>Favorites Page</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FF4141'
    }
})
import { View, Text, StyleSheet, SafeAreaView } from "react-native";


export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Home Page</Text>
        </SafeAreaView>
    )
}   

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "orange",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    }
})
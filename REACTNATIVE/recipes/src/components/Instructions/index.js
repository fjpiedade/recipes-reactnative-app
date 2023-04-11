import { View, Text, StyleSheet } from "react-native";

export function Instructions( { data, index }){
    return(
        <View style={styles.container}>
            <Text style={styles.index}>{index+1}- </Text>
            <Text style={styles.name}>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        marginBottom: 14,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    name:{
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 20,
    },
    index:{
        fontWeight: 'bold',
        fontSize: 20,
    }

})
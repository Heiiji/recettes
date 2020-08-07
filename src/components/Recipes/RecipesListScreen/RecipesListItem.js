import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const URL_IMAGE = "https://spoonacular.com/recipeImages/";

const RecipesListItem = ({item, navigation}) => {
    return <TouchableOpacity onPress={() => {
        navigation.navigate('RecipesDetails', {
            id: item.id
        });
    }}>
        <View style={styles.container}>
            <Image source={{uri: URL_IMAGE + item.image}} style={styles.image} />
            <View style={styles.containerRight}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1,
        maxWidth: "100%"
    },
    image: {
        width: "30%",
        height: 100
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    containerRight: {
        width: "70%",
        paddingLeft: 10,
        paddingTop: 10
    }
})

export default RecipesListItem;
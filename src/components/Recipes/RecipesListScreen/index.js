import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { fetchRecipes } from "../../../api/recipes";
import {useSelector, useDispatch} from "react-redux";
import {getRecipes} from "../../../redux/selectors";
import RecipesListItem from "./RecipesListItem";

const RecipesListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const recipes = useSelector(getRecipes);
    useEffect(() => {
        fetchRecipes(dispatch);
    }, []);

    const _renderItem = ({ item }) => {
        return <RecipesListItem item={item} />
    }

    return <View style={styles.container}>
        <FlatList
            data={recipes}
            renderItem={_renderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <Button onPress={() => {
            navigation.navigate('RecipesDetails')
        }} title="Aller a l'ecran details" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 3,
        backgroundColor: 'lightgrey'
    }
});

export default RecipesListScreen;
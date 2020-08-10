import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { fetchRecipes } from "../../../api/recipes";
import {useSelector, useDispatch} from "react-redux";
import {getRecipes, getSearch} from "../../../redux/selectors";
import RecipesListItem from "./RecipesListItem";
import Search from "../../_Shared/Search/search";

const RecipesListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const recipes = useSelector(getRecipes);
    const search = useSelector(getSearch);

    useEffect(() => {
        fetchRecipes(dispatch, search);
    }, [search]);

    const _renderItem = ({ item }) => {
        return <RecipesListItem navigation={navigation} item={item} />
    }

    const _onRefresh = () => {
        fetchRecipes(dispatch, search);
    }

    return <View style={styles.container}>
        <Search/>
        <FlatList
            data={recipes}
            renderItem={_renderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            refreshing={false}
            onRefresh={_onRefresh}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 2,
        marginVertical: 2,
        backgroundColor: 'lightgrey'
    }
});

export default RecipesListScreen;
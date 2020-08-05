import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {fetchSelectedRecipe} from "../../../api/recipes";
import {useDispatch, useSelector} from "react-redux";
import { getSelectedRecipe } from "../../../redux/selectors";

const RecipesDetailsScreen = ({navigation, route}) => {
    const {id} = route.params;
    const dispatch = useDispatch();
    const recipe = useSelector(getSelectedRecipe);

    useEffect(() => {
        fetchSelectedRecipe(dispatch, id);
    }, []);

    return <View>
        <Text>RecipesDetailsScreen</Text>
        <Text>{recipe.title}</Text>
        <Button title="Revenir" onPress={() => {
            navigation.goBack();
        }}/>
    </View>
}
export default RecipesDetailsScreen;
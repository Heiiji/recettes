import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RecipesListScreen from "../components/Recipes/RecipesListScreen";
import RecipesDetailsScreen from "../components/Recipes/RecipesDetailsScreen";


const Stack = createStackNavigator();

function RecipesNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="RecipesList" component={RecipesListScreen}/>
            <Stack.Screen name="RecipesDetails" component={RecipesDetailsScreen}/>
        </Stack.Navigator>
    );
}
export default RecipesNavigator;
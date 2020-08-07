import React from 'react';
import { View } from "react-native";
import RecipesListScreen from "../components/Recipes/RecipesListScreen";
import RecipesDetailsScreen from "../components/Recipes/RecipesDetailsScreen";
import TasksContainer from "../components/TasksEpic/TasksContainer";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function RecipesNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="RecipesList" component={RecipesListScreen}/>
            <Stack.Screen name="RecipesDetails" component={RecipesDetailsScreen}/>
        </Stack.Navigator>
    );
}

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="recipesList" component={RecipesNavigator}/>
                <Tabs.Screen name="taskContainer" component={TasksContainer}/>
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
import React from 'react';
import TasksContainer from "../components/TasksEpic/TasksContainer";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipesNavigator from "./RecipiesNavigator";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let icon

                        if (route.name === "Recettes") {
                            icon = "ios-list";
                        } else {
                            icon = "ios-cart";
                        }

                        return <Ionicons name={icon} size={32} color={color} />;
                    }
                })
            } >
                <Tabs.Screen name="Recettes" component={RecipesNavigator}/>
                <Tabs.Screen name="Listes" component={TasksContainer}/>
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
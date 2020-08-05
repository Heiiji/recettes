import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RecipesListScreen from './src/components/Recipes/RecipesListScreen';
import RecipesDetailsScreen from './src/components/Recipes/RecipesDetailsScreen';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RecipesListScreen/>
        <RecipesDetailsScreen/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

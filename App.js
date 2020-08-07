import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigation from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigation/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

export default function Header() {
    moment.locale('fr');
    return  (
        <View style={styles.container}>
            <Text style={styles.title}>{moment().format('MMMM Do YYYY')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    }
  });
  
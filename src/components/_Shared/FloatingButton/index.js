import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const FloatingButton = ({ toggleForm, isFormOpened }) => {
    return <TouchableOpacity onPress={toggleForm} style={styles.container}>
        <Text style={styles.text}>
            {
                isFormOpened ? 'x' : '+'
            }
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25
    }
})

export default FloatingButton;
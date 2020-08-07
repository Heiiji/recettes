import React from 'react';
import { View, StyleSheet } from 'react-native';
import Counter from '../_Shared/Counter';

const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
    return <View style={styles.container}>
        <Counter nb={nbTasks} title="Taches créées" />
        <Counter nb={nbTasksCompleted} title="Taches complétées" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
})

export default CountersContainer;
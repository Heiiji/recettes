import React from 'react';
import { FlatList, Text } from 'react-native';
import TaskTiles from './TaskTiles';

const TasksList = ({ tasks }) => {
    return <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskTiles item={item} />}
        keyExtractor={item => `${item.id}`}
    />;
}

export default TasksList;
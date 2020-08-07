import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';
import TaskList from './TasksList';
import TaskForm from './TaskForm';
import CountersContainer from './CountersContainer';
import FloatingButton from '../_Shared/FloatingButton';
import Header from "../_Shared/Header";

function TasksContainer(props) {
    const tasks = useSelector(getTasks);
    const [isFormOpened, setIsFormOpened] = useState(false);

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened);
    }

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.subContainer}>
                {
                    isFormOpened && <TaskForm/>
                }
                <CountersContainer nbTasks={tasks.length} nbTasksCompleted={tasks.filter(task => task.completed).length} />
                <TaskList tasks={tasks} />
                <FloatingButton isFormOpened={isFormOpened} toggleForm={toggleForm} />
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        position: 'relative'
    },
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
})

export default TasksContainer;
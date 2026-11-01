import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import * as Crypto from 'expo-crypto';
import { v4 as uuidv } from 'uuid';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler(taskText) {
    const text = taskText.trim();
    if (!text) return;

    setTaskList((previousTasks) => [
      ...previousTasks,
      { id: uuidv({ random: Crypto.getRandomValues(new Uint8Array(16)) }), text },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.taskContainer}>
        {taskList.map((task) => (
          <TaskItem key={task.id} id={task.id} text={task.text} />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  taskContainer: {
    flex: 3,
    borderTopWidth: 5,
    borderTopColor: 'gray',
    marginTop: 20,
    padding: 20,
  },
});



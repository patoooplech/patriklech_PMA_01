import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , FlatList, Button, Alert} from 'react-native';
import { useState} from 'react';
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
  //správa modalneho okna
const [modalIsVisible, setModalIsVisible] = useState(false);
function deleteTaskItem(id)  {
  //console.log("delete");
  setTaskList((CurrentTaskList) =>{
    return CurrentTaskList.filter((task) => task.id !== id);
  }
);
}
//funkcia pre riadenie modalneho okna
function startAddTaskHandler() {
  setModalIsVisible(true);
}
function endAddTaskHandler() {
  setModalIsVisible(false);
}
  return (
    <View style={styles.appContainer}>
      {/*pridamebutton */}
      <Button title="Add New Task" onPress={startAddTaskHandler} color = "#841584"/>
      <TaskInput onAddTask={addTaskHandler}  visible={modalIsVisible} onCancel={endAddTaskHandler}/>

       <FlatList
        data={taskList}
        renderItem={({item}) => 
        <TaskItem key={item.id}  text={item.text} task ={item} onDeleteItem={deleteTaskItem}  onCancel={endAddTaskHandler}/>
        }
        
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  taskContainer: {
    flex: 3,
    borderTopWidth: 5,
    borderTopColor: 'gray',
    marginTop: 20,
    padding: 20,
  },
});



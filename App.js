import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View , TextInput} from 'react-native';
import { useState } from 'react';
import { v4 as uuidv } from 'uuid';
export default function App() {
  //uchovanie textu pomocou ract useState
  const [taskText, setTaskText] = useState("");
  //uchiva tasky do pola
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler() {
    const newID = uuidv();
    console.log("New task ID:", newID);
    setTaskList((prevTask) => [...prevTask, taskText]);
    setTaskText("");
  }
  function inputTextHandler(enteredText) {
    setTaskText(enteredText);
  }
  return (
    //ukážka použitia komponentov View, Text, TextInput a Button flex
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput  style={styles.inputText} placeholder="Enter a task..." 
        onChangeText={inputTextHandler}/>
        <Button title="Add" onPress={addTaskHandler} />

      </View>
      <View style={styles.taskContainer}>
        {taskList.map((task, index) => (
          <Text key={index}> {task}</Text>
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
  inputContainer: {
    flex: 1,flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
  },
  taskContainer: {flex: 3,
    borderTopWidth: 5,
     borderTopColor: 'gray', 
      marginTop: 20 , 
      padding: 20,},

});

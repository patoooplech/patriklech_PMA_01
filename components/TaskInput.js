import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

export default function TaskInput(props) {
  const [taskText, setTaskText] = useState('');

  function addTaskHandler() {
    props.onAddTask(taskText);
    setTaskText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter a task..."
        onChangeText={setTaskText}
        value={taskText}
        onSubmitEditing={addTaskHandler}
        returnKeyType="done"
      />
     
    </View>
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
         <Button title="Add" onPress={addTaskHandler} />
      </View>
      <View style={styles.button}>
          <Button title="CANCEL" onPress={props.onCancel} />
      </View>
      <View style={styles.button}></View>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 12,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

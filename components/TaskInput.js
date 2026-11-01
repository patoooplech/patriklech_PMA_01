import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  function addTaskHandler() {
    onAddTask(taskText);
    setTaskText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter a task..."
        onChangeText={setTaskText}
        value={taskText}
        onSubmitEditing={addTaskHandler}
        returnKeyType="done"
      />
      <Button title="Add" onPress={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {
  return (
    //ukážka použitia komponentov View, Text, TextInput a Button flex
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput  styles ={styles.inputText} placeholder="Enter a task..."/>
        <Button title="Add"  />

      </View>
      <View style={styles.taskContainer}>
       <Text> UDALOSTI ::::::</Text>
      </View>
    
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,

  },
  inputContainer: {},
  inputText: {},
  taskContainer: {},

});

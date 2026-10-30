import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {
  return (
    //ukážka použitia komponentov View, Text, TextInput a Button flex
    <View style={styles.appContainer}>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 2, backgroundColor: 'blue'}}></View>
      <View style={{flex: 3, backgroundColor: 'green'}}></View>
    
      

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,

  },
  inputContainer: {},
  inputText: {},
  taskContainer: {},

});

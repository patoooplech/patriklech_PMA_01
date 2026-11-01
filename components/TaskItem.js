import { StyleSheet, Text, View , Pressable} from 'react-native';

export default function TaskItem({ task, onDeleteItem }) {
  return (
    <Pressable onPress={onDeleteItem}>
      <View style={styles.taskItem}>
        <Text> {task.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
});

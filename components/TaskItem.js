import { StyleSheet, Text, View } from 'react-native';

export default function TaskItem({ id, text }) {
  return (
    <View style={styles.taskItem}>
      <Text> {text}</Text>
    </View>
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

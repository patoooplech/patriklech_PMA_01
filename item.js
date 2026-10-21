import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function Item({ item }) {
  const [completed, setCompleted] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${completed ? 'Označiť ako nedokončenú' : 'Označiť ako dokončenú'}: ${item.title}`}
      accessibilityState={{ selected: completed }}
      onPress={() => setCompleted((current) => !current)}
      style={({ pressed }) => [
        styles.taskRow,
        completed && styles.taskCompleted,
        pressed && styles.taskPressed,
      ]}
    >
      <Text style={styles.taskText}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskRow: {
    minHeight: 42,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fefefe',
    backgroundColor: '#cf2828',
    margin: 20,
    borderRadius:8,
    
  },
  taskPressed: {
    backgroundColor: '#f3f6f8',
  },
  taskCompleted: {
    backgroundColor: '#b8e6c1',
  },
  taskText: {
    color: '#263744',
    fontSize: 15,
  },
});

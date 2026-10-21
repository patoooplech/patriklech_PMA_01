import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Item from './item';

export default function App() {
  const [draft, setDraft] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const title = draft.trim();
    if (!title) return;

    setTasks((current) => [
      { id: `${Date.now()}-${Math.random()}`, title },
      ...current,
    ]);
    setDraft('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.app}>
      <StatusBar style="light" />

      <View style={styles.header}>
      </View>

      <View style={styles.content}>
        <View style={styles.inputArea}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            onSubmitEditing={addTask}
            placeholder="Zadaj úlohu"
            placeholderTextColor="#8995a3"
            returnKeyType="done"
            style={styles.input}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Pridať úlohu"
            onPress={addTask}
            style={({ pressed }) => [styles.addButton, pressed && styles.pressed]}
          >
            <Text style={styles.addButtonText}>ADD</Text>
          </Pressable>
        </View>

        <View style={styles.orangeRule} />
        <View style={styles.listHeading}>
          <Text style={styles.listTitle}>UDALOSTI :::::</Text>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.taskList}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#147eaa',
    height: 44,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  inputArea: {
    height: 142,
    paddingHorizontal: 18,
    paddingTop: 18,
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  input: {
    flex: 1,
    height: 42,
    backgroundColor: '#ffffff',
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    color: '#1c2a36',
    fontSize: 14,
  },
  addButton: {
    height: 42,
    minWidth: 58,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#147eaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  pressed: {
    opacity: 0.75,
  },
  listHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
  },
  listTitle: {
    color: '#555555',
    fontSize: 12,
    fontWeight: '500',
  },
  orangeRule: {
    height: 3,
    backgroundColor: '#147eaa',
  },
  taskList: {
    paddingBottom: 24,
  },
});

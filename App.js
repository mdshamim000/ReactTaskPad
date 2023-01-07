import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Task from './components/tasks';
export function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays tasks{'\n'}</Text>
        <View styles={styles.items}>
          <Task text={'Here is a task'} />
          <Task text={'Design Items'} />
          <Task text={'Manage Items101010101011010110012200'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4D4D',
    paddingHorizontal: 24,
  },
  tasksWrapper: {
    marginTop: 82,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 26,
    color: '#FFE072',
    fontWeight: 'bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  items: {
    fontWeight: '700',
  },
});

export default App;

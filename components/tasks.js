import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const Task = props => {
  return (
    <View style={styles.items}>
      <View style={styles.itemsLeft}>
        <View style={styles.square}></View>
        <Text style={styles.sectionTitle}>{props.text}</Text>
      </View>

      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    color: '#FFFF',
    fontWeight: '400',
    maxWidth: '80%',
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
    backgroundColor: '#727070',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemsText: {},
  itemsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    backgroundColor: '#FFE072',
    width: 24,
    height: 24,
    opacity: 0.6,
    borderRadius: 6,
    marginRight: 12,
  },
  circle: {
    borderColor: '#FFE27C',
    width: 22,
    height: 22,
    borderRadius: 9,
    borderWidth: 2,
  },
});

export default Task;

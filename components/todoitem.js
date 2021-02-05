import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({item, PressHandler}) {
  return (
    <TouchableOpacity onPress={() => PressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1,
  },
});

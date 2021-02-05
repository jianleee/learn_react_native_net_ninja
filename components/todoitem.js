import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function TodoItem({item, PressHandler}) {
  return (
    <TouchableOpacity onPress={() => PressHandler(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <Icon name="trash" size={18} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
});

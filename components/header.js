import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My ToDos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

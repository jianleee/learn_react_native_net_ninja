import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// import Sandbox from './components/sandbox';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddToDo from './components/addTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'learn vuejs', key: '1'},
    {text: 'learn angular', key: '2'},
    {text: 'learn reactnative', key: '3'},
    {text: 'learn nodejs', key: '4'},
  ]);

  const PressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('Oops', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('close alert')},
      ]);
    }
  };
  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} PressHandler={PressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

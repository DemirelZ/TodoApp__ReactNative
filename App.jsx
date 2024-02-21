import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/components/header';
import Input from './src/components/input';
import {AddSquare} from 'iconsax-react-native';
import Todo from './src/components/todo';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleToDoList = () => {
    if (text.length === 0) {
      Alert.alert('Notice', 'Please write something to add to the list');
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      title: text,
      date: new Date().toLocaleString(),
      isComplated: false,
      isEdit: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <SafeAreaView>
      <Header title={'TO DO LIST APP'} />
      <Input
        placeholder={'Type something...'}
        IconName={AddSquare}
        onPressChange={handleToDoList}
        hasIcon={false}
        value={text}
        onChangeText={x => setText(x)}
      />
      <Todo todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
};

export default App;

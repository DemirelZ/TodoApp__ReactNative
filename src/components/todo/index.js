import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {TickCircle, Edit2, Trash} from 'iconsax-react-native';

import {styles} from './style';

const Todo = ({todos, setTodos}) => {
  const handleDelete = ID => {
    const filteredtodos = todos.filter(todo => todo.id !== ID);
    setTodos(filteredtodos);
  };

  const handleCompleted = ID => {
    const newTodos = todos.map(todo =>
      todo.id === ID ? {...todo, isComplated: !todo.isComplated} : todo,
    );

    setTodos(newTodos);
  };

  const handleEdit=(ID)=>{

    const newtodolist=todos.map((todo)=> todo.id===ID ? {...todo, isEdit:true} : todo)
    setTodos(newtodolist)

  }

  return (
    <ScrollView style={styles.todosWrapper}>
      {todos.length === 0 ? (
        <Text style={styles.yokText}> Listede yapılacak bir şey yok</Text>
      ) : (
        todos.map(todo => (
          <View
            style={[
              todo.isComplated === true
                ? styles.greenBorder
                : styles.blackBorder,
              styles.todoWrapper,
            ]}
            key={todo.id}>
            <View style={styles.textsWrapper}>
             { todo.isEdit ? (<TextInput defaultValue={todo.title}/>) : ( <Text style={styles.titleText}>{todo.title}</Text>)}
              <Text>{todo.date}</Text>
            </View>
            <View style={styles.iconsWrapper}>
              <TouchableOpacity onPress={() => handleCompleted(todo.id)}>
                <TickCircle
                  size="28"
                  color={todo.isComplated === true ? 'green' : '#FF8A65'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>handleEdit(todo.id)}>
                <Edit2 size="28" color="#FF8A65" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(todo.id)}>
                <Trash size="28" color="#FF8A65" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Todo;

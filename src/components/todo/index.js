import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {TickCircle, Edit2, Trash} from 'iconsax-react-native';

import {styles} from './style';

const Todo = ({todos}) => {
  return (
    <ScrollView style={styles.todosWrapper}>
      {todos.length === 0 ? (
        <Text style={styles.yokText}> Listede yapılacak bir şey yok</Text>
      ) : (
        todos.map(todo => (
          <View style={styles.todoWrapper} key={todo.id}>
            <View style={styles.textsWrapper}>
              <Text style={styles.titleText}>{todo.title}</Text>
              <Text>{todo.date}</Text>
            </View>
            <View style={styles.iconsWrapper}>
              <TickCircle size="28" color="#FF8A65"/>
              <Edit2 size="28" color="#FF8A65" />
              <Trash size="28" color="#FF8A65" />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Todo;

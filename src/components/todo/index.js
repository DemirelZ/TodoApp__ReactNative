import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  TickCircle,
  Edit2,
  Trash,
  ClipboardTick,
  CloseCircle,
} from 'iconsax-react-native';

import {styles} from './style';

const Todo = ({todos, setTodos}) => {
  const [changedText, setChangedText] = useState(changedText);
  const [editMode, setEditMode] = useState(false)

  const handleDelete = ID => {
    Alert.alert('Uyarı', 'Silmek istediğinize emin misiniz?', [
      {text: 'Vazgeç'},
      {
        text: 'OK',
        onPress: () => {
          const filteredtodos = todos.filter(todo => todo.id !== ID);
          setTodos(filteredtodos);
        },
      },
    ]);
  };

  const handleCompleted = ID => {
    const newTodos = todos.map(todo =>
      todo.id === ID ? {...todo, isComplated: !todo.isComplated} : todo,
    );

    setTodos(newTodos);
  };

  const handleEdit = ID => {
    setEditMode(true)
    const newtodolist = todos.map(todo =>
      todo.id === ID ? {...todo, isEdit: true} : todo,
    );
    setTodos(newtodolist);
  };

  const closeIsEdit = ID => {
    setEditMode(false)
    const newArr = todos.map(todo =>
      todo.id === ID ? {...todo, isEdit: false} : todo,
    );
    setTodos(newArr);
    
  };

  const saveEdit =(ID)=>{

    const newtodos=todos.map((todo)=> todo.id === ID ? {...todo, title:changedText} : todo)
    setTodos(newtodos)
    setEditMode(false)

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
              {todo.isEdit ? (
                <View style={styles.editableWrapper}>
                  <TextInput
                    style={styles.editTitle}
                    defaultValue={todo.title}
                    value={changedText}
                    onChangeText={(a)=>setChangedText(a)}
                  />
                </View>
              ) : (
                <Text style={styles.titleText}>{todo.title}</Text>
              )}
              <Text>{todo.date}</Text>
            </View>
            {editMode ? (
              <View style={styles.editIcons}>
                <TouchableOpacity onPress={() => closeIsEdit(todo.id)}>
                  <CloseCircle size={28} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>saveEdit(todo.id)}>
                  <ClipboardTick size={28} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.iconsWrapper}>
                <TouchableOpacity onPress={() => handleCompleted(todo.id)}>
                  <TickCircle
                    size="28"
                    color={todo.isComplated === true ? 'green' : '#FF8A65'}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEdit(todo.id)}>
                  <Edit2 size="28" color="#FF8A65" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(todo.id)}>
                  <Trash size="28" color="#FF8A65" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Todo;

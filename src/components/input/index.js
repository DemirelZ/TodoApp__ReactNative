import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AddSquare} from 'iconsax-react-native';

const Input = () => {
  return (
    <View style={styles.InputWrapper}>
      <TextInput style={styles.input} />
      <TouchableOpacity>
        <AddSquare size="42" color="#FF8A65" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

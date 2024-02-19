import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const Input = ({placeholder, IconName, onPressChange , value, onChangeText}) => {
  return (
    <View style={styles.InputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="default"
        multiline={false}
        value={value}
        onChangeText={onChangeText}
        
      />
      <TouchableOpacity onPress={onPressChange}>
        <IconName size="42" color="#FF8A65" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

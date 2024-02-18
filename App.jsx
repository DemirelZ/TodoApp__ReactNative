import {  SafeAreaView } from 'react-native'
import React from 'react'
import Header from './src/components/header'
import Input from './src/components/input'


const App = () => {
  return (
    <SafeAreaView>
      <Header title={'TO DO LIST APP'}/>
      <Input />
    </SafeAreaView>
  )
}

export default App


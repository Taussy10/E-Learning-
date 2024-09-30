import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigators from './src/Navigators/Navigators'

const App:FC = () => {
  return (
   <NavigationContainer>
    <Navigators />
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
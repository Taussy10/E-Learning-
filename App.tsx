import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigations from './src/Navigators/Navigations'


const App:FC = () => {
  return (
   <NavigationContainer>
    <Navigations />
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
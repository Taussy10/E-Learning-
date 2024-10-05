import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { useNavigationState } from '@react-navigation/native';

const CompletedCourses = () => {


  const currentScreenIndex = useNavigationState(state => state.index);

  console.log(currentScreenIndex , "completed courses");

  return (

    <View>
      <Text>CompletedCourses</Text>
    </View>
  )
}

export default CompletedCourses

const styles = StyleSheet.create({})
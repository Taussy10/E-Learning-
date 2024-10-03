import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// We get safeAreaView from 3 places 
// 1. React native , 2. Expo , 3. React navigation 
// Which one to use ? RN: It's only aplicable for IOS so don't use
// Expo: depreacated so use React navigation(react-native-safe-area-context)

// Now you can import any vector icons: I learned this technique from "List of RN apps code on github"

import {AntDesign} from '@expo/vector-icons';
import { colors } from '../Utils/Colors';
import CourseInfo from '../Components/CourseDetails/CourseInfo';


const CourseDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* For topbar */}
      <View style={styles.topBar}>
     <AntDesign name="left" size={24} color="black" />     
     <Text>Course Overview</Text>
     <AntDesign name="hearto" size={24} color="black" />
      </View>

<CourseInfo />
    
    </SafeAreaView>
  )
}

export default CourseDetails

const styles = StyleSheet.create({
 container:{
 flex: 1,
padding: 15,  
backgroundColor: colors.ScreenColor
 }, 
 topBar:{
    flexDirection: 'row',
    justifyContent:'space-between',

  }
})
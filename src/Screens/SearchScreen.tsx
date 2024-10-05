import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../Utils/Colors'
import SearchBar from '../Components/Home/SearchBar'
import SearchCourses from '../Components/SearchScreen/SearchCourses'
import Header from '../Components/Home/Header'

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* for the Header */}
      <Header 
      leftIcon = "left"
      headerName = "Course Overview"
      rightIcon = "setting"
      />
        <SearchBar />
<SearchCourses />
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.ScreenColor,
        padding: 15 ,
    },

})
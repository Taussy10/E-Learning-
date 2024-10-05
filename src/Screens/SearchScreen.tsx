import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../Utils/Constants'
import SearchBar from '../Components/Home/SearchBar'
import SearchCourses from '../Components/SearchScreen/SearchCourses'
import Header from '../Components/Home/Header'
import Cards from '../Components/SearchScreen/Cards'

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <ScrollView> */}

        {/* for the Header */}
      <Header 
      leftIcon = "left"
      headerName = "Search"
      rightIcon = "setting"
      />
        <SearchBar />

<ScrollView showsVerticalScrollIndicator={false}>

<Cards />
</ScrollView>

{/* <SearchCourses /> */}
{/* </ScrollView> */}

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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Header = ({leftIcon , headerName , rightIcon}) => {

  const navigation = useNavigation()

  
  return (

   <View style={styles.topBar}>
     <AntDesign name={leftIcon} size={24} color="black" onPress={() => navigation.goBack()} />     
     <Text>Course Overview</Text>
     <AntDesign name={rightIcon} size={24} color="black" />
      </View>





  )
}

export default Header

const styles = StyleSheet.create({
  topBar:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
})

{/* <Text style={{ color: 'grey' , fontSize: 15 }}>Find your lessons today!</Text> */}

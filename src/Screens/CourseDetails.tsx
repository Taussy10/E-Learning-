import { StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
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
import { useNavigation } from '@react-navigation/native';
import Chapter from '../Components/CourseDetails/Chapter';


const CourseDetails = () => {
 
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>

      {/* For topbar */}
      <View style={styles.topBar}>
     <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()} />     
     <Text>Course Overview</Text>
     <AntDesign name="hearto" size={24} color="black" />
      </View>

<CourseInfo />
    
  <View style={{flexDirection: 'row' , justifyContent:'center', gap: 30 , marginTop: 10, marginBottom: 20,}}> 
    {/* gap Vs margin-right/left: margin is use only one elment to stay from other elment
    gap is use to make gap between two elements  */}
<Text>Lessons</Text> 
<Text>Description</Text>
    </View>

    {/* Chapter containers */}

 <Chapter lessonName = "Introduction to figma" duration ="4:28 min" />  
 <Chapter lessonName = "Understanding Interface" duration ="6:12 min" />  
 <Chapter lessonName = "Create first design project" duration ="43:28 min" />  
 <Chapter lessonName = "Prototyping the design" duration ="40:15 min" />  



{/* Button and price */}

<View style={{justifyContent: 'space-between',
  flexDirection:'row', alignItems: 'center',
  marginTop: 20,
}}>

<View style={styles.priceContainer}>
<Text style={{color: colors.PRIMARY, }}>$399</Text>
</View>

<TouchableOpacity 
activeOpacity={0.8}
style={styles.button}>
<Text style={{color: 'white' , fontWeight: 'bold'}}>Enroll Now</Text>
</TouchableOpacity>

</View>


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
  },
  priceContainer:{
    borderRadius: 10,
    padding: 10,
    width: 60,
    height: 40,
    elevation: .4,
    borderColor: '#F2F2F2',
  },
  button:{
    borderRadius: 10,
    padding: 10,
    width: 250,
    height: 50,
    elevation: .4,
    backgroundColor: colors.PRIMARY,
    justifyContent:'center',
    alignItems: 'center',
    // borderColor: '#F2F2F2',
  },
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {AntDesign , Entypo} from '@expo/vector-icons'
import { colors } from '../../Utils/Colors'


const Chapter = ({lessonName , duration}) => {
    // what is destructure and how it's diff from spread/rest operator
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    style={styles.container}>

        {/* for icons */}
        <View style={styles.circle}>
        <Entypo name="controller-play" size={30} color="white" />
        </View>

     <View>
     <Text style={{color : "#2C2C2C" , fontWeight: 'bold'}}>{lessonName}</Text>
     <Text style={{color : "#AEAEAE"}}>{duration}</Text>
     </View>

     <AntDesign name="right" size={24} color= {colors.PRIMARY} />
    </TouchableOpacity>
  )
}

export default Chapter

const styles = StyleSheet.create({
   container:{
    flexDirection: 'row',
    // justifyContent: 'space-between' ,
    justifyContent: 'space-between' ,
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 10, 
    paddingRight: 10, 
    elevation: 0.4,
    // borderColor: 'green'
   },
   circle:{
        height: 45 ,
        width: 45 ,
        borderRadius: 45,
        backgroundColor: colors.PRIMARY,
        justifyContent: 'center',
        alignItems:'center'
    }
})
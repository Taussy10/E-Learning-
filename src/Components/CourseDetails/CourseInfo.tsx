import { StyleSheet, Text, View , Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors,  courseList } from '../../Utils/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';

// only TouchableOpacity and simillar to it's component 
// and pressable has onPress 

const CourseInfo = () => {

  return (
    // <ScrollView>

    <View style={styles.container} 
    >

        {/*  */}

 <View
 style={{marginRight: 10 , 
 }}  >
<View style={{marginBottom: 10, }} >
<Image source={require('../../../assets/Images/lesson-1.png')}
 style={{borderRadius: 20 , width: "100%", }} />
      </View>
      </View>




<View style={{ marginBottom: 7 }} >
<Text style={{color:"#2C2C2C" , fontWeight: 'bold' }}> Figma master class for beginners </Text>
</View>


{/* Rating and timeStamps */}
<View style={{flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center'  }}>

<Text style={{color: '#8C8C8C' , fontWeight: 'semibold'}}> (6h 30min) </Text>
<Text style={{color: '#8C8C8C' , fontWeight: 'semibold'}}> 28 Lessons </Text>



<View style={{backgroundColor: "#EAF4FF" , width: 55 ,padding: 6, borderRadius: 10, flexDirection: 'row'  }}> 
<FontAwesome name="star" size={18} color="#FFC71E" />
    <Text style={{color: colors.PRIMARY}}> 4.9</Text>
</View>
</View>




      
      
    </View>
    // </ScrollView>

  )
}

export default CourseInfo

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // Don't give flex 1 other wise it will take whole space of screen
        // width: 1000,
        // borderColor: 'black',
        // borderWidth: 5,
        // padding: 10,  
        // backgroundColor: 'lightgreen',
        marginTop: 30,
        // justifyContent: 'center'

    }
})






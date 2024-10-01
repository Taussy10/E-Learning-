import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { colors } from '../../Utils/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Courses = () => {
  return (
    <View style={styles.container}>

        {/*  */}
      <View style={{marginBottom: 10, }} >
<Image source={require('../../../assets/Images/lesson-1.png')}
 style={{borderRadius: 20 , width: "90%", }} />
      </View>

<View style={{width: 160, marginBottom: 20 }}>
<Text style={{color:"#2C2C2C" , fontWeight: 'bold' }}> Figma master class UI Design <Text style={{color: '#AEAEAE'}}> (28 lessons) </Text></Text>
</View>


{/* Rating and timeStamps */}
<View style={{flexDirection: 'row', backgroundColor:'blue' }}>

<View style={{backgroundColor: "#EAF4FF" , width: 80 ,padding: 6, borderRadius: 10,   }}> 
    <Text style={{color: colors.PRIMARY}}>6h 30min</Text>
</View>

<View style={{flexDirection: 'row'}}>
    {/* ICon */}
    <FontAwesome name="star" size={24} color="#FFC71E" />
    <Text style={{color: "#AEAEAE"}}> 4.9 </Text>
</View>

</View>


    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 200,
        // borderColor: 'black',
        // borderWidth: 5,
        padding: 10,  
        elevation: 10,
        backgroundColor: 'lightgreen'

    }
})
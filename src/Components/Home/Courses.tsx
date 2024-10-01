import { StyleSheet, Text, View , Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { colors,  courseList } from '../../Utils/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Courses = () => {
  return (
    // <ScrollView>

    <View style={styles.container}>

        {/*  */}

        <FlatList 
        // ItemSeparatorComponent={}
       data={courseList}
       horizontal
       showsHorizontalScrollIndicator={false}
       
       renderItem={({item}) => (
 <View style={{marginRight: 10 , elevation: 0.7, 
 }}>
<View style={{marginBottom: 10, }} >
<Image source={require('../../../assets/Images/lesson-1.png')}
 style={{borderRadius: 20 , width: "90%", }} />
      </View>

<View style={{width: 160, marginBottom: 20 }}>
<Text style={{color:"#2C2C2C" , fontWeight: 'bold' }}> {item.name} <Text style={{color: '#AEAEAE'}}> (28 lessons) </Text></Text>
</View>


{/* Rating and timeStamps */}
<View style={{flexDirection: 'row', justifyContent: 'space-between',  width: 157, }}>

<View style={{backgroundColor: "#EAF4FF" , width: 80 ,padding: 6, borderRadius: 10,   }}> 
    <Text style={{color: colors.PRIMARY}}>{item.duration}</Text>
</View>

<View style={{flexDirection: 'row' , }}>
    {/* ICon */}
    <FontAwesome name="star" size={24} color="#FFC71E" />
    <Text style={{color: "#AEAEAE"}}> {item.ratings}</Text>
</View>

</View>


 </View>

       )} 
        />
      
    </View>
    // </ScrollView>

  )
}

export default Courses

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height: '100%',
        // borderColor: 'black',
        // borderWidth: 5,
        padding: 10,  
        // backgroundColor: 'lightgreen',
        justifyContent: 'center'

    }
})
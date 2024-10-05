import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { searchList } from '../../Utils/Constants'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Cards = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={} /> */}
      <FlatList 

      data={searchList}
      renderItem={({item}) => 
        <View style={styles.card}>

{/* For the Image and other component of card sytlilng */}
<View >

       <Image source={item.image} style={{borderRadius: 10 ,  padding: 10}} />
</View>


<View style={{padding: 10, }}>
       <Text style={{fontSize: 16, fontWeight: 'bold' , marginBottom: 7,}}>{item.name}</Text>

       {/* Level and duration  */}
     <View style={{flexDirection: 'row' , gap: 2 ,}}>
    <Text style={{color: '#8C8C8C' , fontSize: 13,}}>{item.level}</Text>
    <Text style={{color: '#8C8C8C' , fontSize: 13,}}>/</Text>
    <Text style={{color: '#8C8C8C' , fontSize: 13,}}>{item.lessons}</Text>
    </View>

    {/* For star duration and heart */}
    <View style={{flexDirection: 'row', justifyContent: 'space-between',  width: 157, marginTop: 0,
        
    }}>

    <View style={{flexDirection: 'row' , }}>
    {/* ICon */}
    <FontAwesome name="star" size={24} color="#FFC71E" />
    <Text style={{color: "#AEAEAE"}}> {item.ratings}</Text>
</View>


    <Text >{item.duration}</Text>

    <FontAwesome name="heart-o" size={24} color="black" />




</View>


</View>
        </View>
    }
      
      />

    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    container:{
        height: "100%",
        // width: , 
        backgroundColor: 'lightgreen',
        // flexDirection: 'row',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'yellow',
        borderRadius: 20,
        marginTop: 7,
        padding: 20,

    }

})
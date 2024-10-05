import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { searchList } from '../../Utils/Constants'

const Cards = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={} /> */}
      <Text>Hello</Text>
      <FlatList 

      data={searchList}
      renderItem={({item}) => 
        <View style={styles.card}>

       <Image source={item.image} />
       <Text>{item.name}</Text>

       {/* Level and duration  */}
     <View style={{flexDirection: 'row' , gap: 2}}>
    <Text style={{color: '#8C8C8C' , fontSize: 13,}}>{item.level}</Text>
    <Text style={{color: '#8C8C8C' , fontSize: 13,}}>/</Text>
    <Text style={{color: '#8C8C8C' , fontSize: 13,}}>{item.lessons}</Text>
    </View>

    {/* For star */}

        </View>
    }
      
      />

    </View>
  )
}

export default Cards

const styles = StyleSheet.create({

})
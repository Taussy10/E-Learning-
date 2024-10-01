import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { FC } from 'react'
import Icons from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SearchBar } from 'react-native-screens';
import Courses from '../Components/Home/Courses';
import { colors } from '../Utils/Colors';

const Home:FC = () => {
 
 


  return (
    <SafeAreaView style={styles.container}>
<ScrollView
showsVerticalScrollIndicator={false}
>

        {/* for top bar */}
        <View style={styles.topBar}>

    {/* for text */}
    <View>
     <Text style={{fontWeight: 'bold', fontSize: 25 , color: "#2C2C2C" }}>Hi , Jerel</Text>
     <Text style={{ color: 'grey' , fontSize: 15 }}>Find your lessons today!</Text>
     </View>


<View>
<Ionicons name="notifications-outline" size={24} color="black" />
</View>
        </View>




{/* for searchbar and filter */}
<View style={{flexDirection: 'row', alignItems:'center', gap: 10, marginTop: 20,  }}>

{/* for searchbar */}
<TextInput style={styles.searchBar}
placeholder='Search Now '
>
    
<Ionicons name="search-outline" size={24} color="black" />
</TextInput>

{/* for filter */}


<View style={styles.filter}>

<Ionicons name="filter-circle-outline" size={30} color="white" />
</View>

</View>


<View style={styles.banner}>

    {/* for text and button */}
    <View style={styles.bannerText}>
        <Text style={{color:"#577395", fontSize: 15, fontWeight: 'bold' }}>Discover Top Pics</Text>

        {/* for text */}
        <View style={{flexDirection: 'row' , alignItems:'center'}}>
        <Text style={{color:"#2D4663" , fontSize: 25, fontWeight: 'bold' }} > +100 </Text>
        <Text style={{color:"#577395"}} > lessons</Text>
        </View>

<TouchableOpacity style={styles.button}
activeOpacity={0.8}
>
    <Text style={{color:'white'}}>Explore More</Text>
</TouchableOpacity>

    </View>

    <View>
        <Image source={require('../../assets/Images/banner.png')}  />
    </View>

</View>


{/* for popular lessons  */}
<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
    <Text style={{color:"#2c2c2c" , fontWeight: '700'}} >Popular Lessons</Text>
    <Text style={{color: colors.PRIMARY}}>See All</Text>
</View>

<Courses />
</ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        padding: 20,
        backgroundColor:'F9FBFF'
    },
    topBar:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    searchBar:{
        flexDirection: 'row',
        padding: 13,
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        width: 270,
        color: 'grey'

    },
    filter:{
        backgroundColor: colors.PRIMARY,
        // padding:10,
        height: 50,
        width:40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    banner:{
        flexDirection:'row',
        backgroundColor: "#ACD7FF",
        width: 330,
        justifyContent: 'space-around' ,
        paddingTop: 10,
        // paddingBottom: 3,
        borderRadius: 20,
        padding: 5,
        marginTop: 30

    },
    bannerText:{
    
    },
    button:{
        padding: 18,
        borderRadius: 20,
        backgroundColor: colors.PRIMARY

    }
})


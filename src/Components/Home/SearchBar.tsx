import { StyleSheet, Text, View , TextInput  } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../Utils/Constants';


const SearchBar = () => {
  return (
<View style={{flexDirection: 'row', alignItems:'center', gap: 20, marginTop: 20,  }}>

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
  )
}

export default SearchBar

const styles = StyleSheet.create({
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

})
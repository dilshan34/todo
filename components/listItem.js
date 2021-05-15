
import React from 'react';
import { StyleSheet, Text, View ,onPress, TouchableOpacity} from 'react-native';

const ListItem =({item,deleteItem})=>{
  return(
   <TouchableOpacity style={styles.list} onPress={() => deleteItem(item.id)}>
       <View style={styles.listItemView} >  

       <Text style={styles.listItemText}  >{item.text} </Text>
       
      

       </View>
   </TouchableOpacity>
  )
}

export default ListItem;

const styles = StyleSheet.create({
    list:{
        padding:10,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'gray',
        borderRadius:10,
        marginTop:10
    },
    listItemView:{
        textAlign:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    listItemText:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    }
 
});


import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Header =({title})=>{
  return(
    <View style={styles.Header}>
      <Text
      style={styles.text}> { title}</Text>
     
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  Header: {
   height:80,
   padding:15,
   textAlign:'center',
   backgroundColor:'darkslateblue',

    
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center'
    
   
  },
  image:{
    borderRadius:100/2,
    marginTop:50,
    width:200,
    height:200,
  }
});

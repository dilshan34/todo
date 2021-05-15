
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Button} from 'react-native';

const AddItem =({title,addItem})=>{

    const [text,setText]= useState('');

    const onChange = (textVal) => setText(textVal);

  return(
      <View style={styles.view}>
          <TextInput placeholder='Add Item' style={styles.input} onChangeText={onChange}/>
          <TouchableOpacity onPress={(text)=> addItem}>
                <Button title='Add item' style={styles.btn}/>
          </TouchableOpacity>
      </View>
   
  )
}

export default AddItem;

const styles = StyleSheet.create({
 btn:{
     backgroundColor:'#d67915',
     textShadowColor:'white',
     marginStart:20,
     padding:10
 },
 input:{
     padding:10,
     marginHorizontal:20,
     borderRightColor:'black',
 },
 view:{
     marginHorizontal:20,
     marginVertical:20,
 }
});

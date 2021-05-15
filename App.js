
import React,{useState} from 'react';
import { StyleSheet,TouchableOpacity, Text, View ,FlatList} from 'react-native';
import Header from './components/header'
import ListItem from './components/listItem'
import AddItem from './components/addItem'

const App =()=>{

  const [items,setItems] = useState([
    {id:Math.random().toString() , text:'milk1'},
    {id:Math.random().toString() , text:'milk2'},
    {id:Math.random().toString() , text:'milk3'},
    {id:Math.random().toString() , text:'milk4'},
  ])

  const deleteItem = (id)=>{
    setItems(prevItem => {
      return prevItem.filter(item=> item.id != id)
    });

  }

  const addItem =(item) =>{
    setItems(prevItem=>{
      return [{id:Math.random().toString(), text:item},...prevItem];
    });
  }

  return(
    <View style={styles.container}>
     <Header  title='Hello Dilshan'/>

     <AddItem/>

     <FlatList
        data={items}
        renderItem={({item}) =><ListItem item={item} deleteItem={deleteItem} addItem={addItem}/>}
      />
     
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
   marginTop:20,
   flex:1,
  },

  text:{
    marginLeft:20,
    marginTop:20,
    fontSize:15,
    backgroundColor:'yellow',
    padding:5,
    textAlign:'center'
  }
 
});

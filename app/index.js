import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MusicApp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Music App</Text>
            </View>
        )
    }
}

export default MusicApp;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
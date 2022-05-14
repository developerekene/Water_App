import React from "react";
import { View, StyleSheet, Image} from 'react-native'


export default class Regform extends React.Component{
     render(){
          return(
               <View style={styles.regform}>
                   <Image
          style={styles.tinyLogo}
          source={{uri: './assets/Frame2.png'}}
        />
               </View>
          );
     }
}

const styles = StyleSheet.create({
     regform: {
          alignSelf: 'stretch',
     },
     header: {
          fontSize: 24,
          color: '#000',
          marginBottom: 10,
          borderBottomColor: '#59cbbd',
          borderBottomWidth: 1,
     },
     textinput: {
          alignSelf: 'stretch',
          height: 40,
          marginBottom: 30,
          color: '#000',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
     },
     button: {
          alignSelf: 'stretch',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#59cbbd',
          marginTop: 30,
     },

     btntext: {
          color: '#fff',
          fontWeight: 'bold'
     }
});

//secureTextEntry={true}
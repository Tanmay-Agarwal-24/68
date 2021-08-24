import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';

import AppHeader from '../components/AppHeader';


export default class Screen extends Component {

 
 

  render() {
    return (
      <View>
        <AppHeader />
        
          <View style={styles.buttonsContainer}>
           <Text style={{ fontSize:30,alignSelf: 'center'}}>Thanks for voting</Text>
           <Image
                style={{ width: 300, height: 220, marginLeft: 5,marginTop:50 }}
                source={require('../assets/TeamImage.png')}
              />
             
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {

    alignSelf: 'center',
    marginTop: 50,
  },

});

import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './DJButton';
import AppHeader from './AppHeader';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri='http://soundbible.com/mp3/mallard_duck-Mike_Koenig-667013646.mp3'
            text="Press Me"
            bgcolor="purple"
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri='http://www.ichime.com/s/5-5.mp3'
            text="Press Me"
            bgcolor="yellow"
          />
          </View>
          <View style={styles.musicButtonContainer}>
          <DJButton
            uri='http://www.zar.co.za/sounds/lion.mp3'
            text="Press Me"
            bgcolor="green"
          />
            <DJButton
            uri='http://soundbible.com/mp3/Bird_in_Rain-Mike_Koenig-441535833.mp3'
            text="Press Me"
            bgcolor="blue"
          />
        </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   stopButtonContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginTop:40
  },
   musicButtonContainer : {
    
    justifyContent:'center', 
    alignItems:'center',
   
  },
  stopButton :{
    width: '80%',
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:2,
    borderColor : 'rgba(0,0,0,0.3)',
    marginTop:20
  }
});


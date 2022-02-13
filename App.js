import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Modal, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'



export default function App() {

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <ScrollView>
    <View style={styles.topbar}>
      <Image  
      source={{uri:'https://imgur.com/1hvWN9L.png'}}
      style={styles.image}/>
      <Text style={styles.text}>Hello, Suraj!</Text>
      
    </View>
    <View style ={styles.midbar}>
      <Image  
      source={{uri:'https://cdn-icons.flaticon.com/png/512/2704/premium/2704332.png?token=exp=1644780782~hmac=378a97ea4f3b370aa5c4c05494f0f166'}}
      style={styles.image2}/>
      <Text style={styles.text}>$4,123</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topbar: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  midbar: {
    flex: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: "#6ccca2"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 30,
  },
  image2: {
    height: 100,
    width: 100,
    
    margin: 30,
  },
  text:{
    fontSize: 30,
    marginTop: 65,
    fontFamily: 'BebasNeue_400Regular',
    color: '#fff'
  },
});

  


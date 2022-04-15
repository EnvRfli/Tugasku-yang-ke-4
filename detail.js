import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import DATA from './data';
import * as Font from 'expo-font';
import  AppLoading from 'expo-app-loading';

const fetchFont = () => {
  return Font.loadAsync({
    'Sriracha' : require('./assets/font/Sriracha-Regular.ttf')
  })
}

const Detail = ({navigation}) => {
  const [fontLoaded, SetFontLoaded] = useState(false);
  if (!fontLoaded) {
    <AppLoading
      startAsync={fetchFont}
      onError = {() => console.log('ERROR')}
      onFinish = {() => {
        SetFontLoaded(true);
      }}
    />
  }

  const Card = ({dataa}) => {
    return (
      <TouchableOpacity style={styles.daftarnama} onPress={() => navigation.navigate('beranda', dataa)}>
        <Text style={styles.teksnama}>{dataa.nama}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <ImageBackground style={styles.container} source={require('./assets/8f871db726cc745e7f19064655688335.jpg')}>
        <Text style={styles.teksheader}>MyFriend.App</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return <Card dataa={item} />;
        }}
        keyExtractor={item => item.linkIG}
      />
  
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  teksheader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 35,
    alignSelf: 'center',
  },

  daftarnama: {
    height: 35,
    marginHorizontal: 30,
    backgroundColor: '#40DFEF',
    borderRadius: 5,
    marginBottom: 25,
  },

  teksnama: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    padding: 10,
    marginLeft: 10,
    fontFamily: 'Sriracha',
    color: 'black',
  }

});
export default Detail;
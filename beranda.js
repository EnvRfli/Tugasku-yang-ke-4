import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
import  AppLoading from 'expo-app-loading';

const fetchFont = () => {
  return Font.loadAsync({
    'PatrickHand' : require('./assets/font/PatrickHand-Regular.ttf')
  })
}

const Beranda = ({navigation, route}) => {
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
  const Item = route.params;

  const [result, setResult] = useState(null);
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(Item.linkIG);
  };
  return (
    <ImageBackground style={styles.container} source={require('./assets/8f871db726cc745e7f19064655688335.jpg')}>
      
        <TouchableOpacity onPress={() => navigation.navigate('detail')}>
          <Image source={require('./assets/—Pngtree—vector back icon_4190818.png')} style={styles.viewicon}/>
        </TouchableOpacity>
        <Text style={styles.nama}>Nama  = {Item.nama}</Text>
        <Text style={styles.nama}>Gender = {Item.jenisKelamin}</Text>
        <Text style={styles.nama}>Hubungan  = {Item.Hubungan}</Text>
        <Text style={styles.hubungi}>Sosial Media : </Text>

        <View style={styles.viewsosmed}>
        <TouchableOpacity onPress={_handlePressButtonAsync}>
          <Image source={require('./assets/Instagram_icon.png.webp')} style={styles.sosmed} />
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header:{
    height: 50,
    backgroundColor: "blue",
    marginBottom: 35,
  },

  teksheader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 11,
  },

  nama: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#85F4FF',
    marginTop: 5,
    fontFamily: 'PatrickHand',
    opacity: 1,
    textAlign: 'center'
  },

  hubungi: {
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
    marginTop: 20,
    opacity: 1,
    textAlign:'center'
  },

  viewsosmed :{
    height: 50,

  },
  viewicon :{
    height: 40,
    width: 40,
  },

  viewicon: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 40

  },

  sosmed: {
    height: 50,
    width: 50,
    marginTop: 5,
    alignSelf: 'center'
  }

});
export default Beranda;

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState,useEffect} from 'react';
  
  import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

  const adUnitId =  TestIds.INTERSTITIAL;

  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  
  const InterstitialAdsScreen = ({navigation}) => {
  
     useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            interstitial.show();
        });
        // Start loading the interstitial straight away
        interstitial.load();
        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);
  
    return (
      <View style={homeStyle.parentStyle}>
        <Text style={homeStyle.h1}>Integrate admob's ads in react native</Text>
      </View>
    );
  };
  
  export default InterstitialAdsScreen;
  
  const homeStyle = StyleSheet.create({
  
    parentStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },
    h1: {
      marginBottom: 20,
      fontSize: 25,
      color: 'blue',
      textAlign: 'center',
    },
  });
  
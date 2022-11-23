import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import MyButton from './componets/MyButton';
import { BannerAdSize,BannerAd,AppOpenAd, TestIds, AdEventType,InterstitialAd } from 'react-native-google-mobile-ads';

const adUnitId =  TestIds.BANNER ;



const HomeScreen = ({navigation}) => {
  var interstitial;

  useEffect(() => {
    const unsubscribe = interstitial?.addAdEventListener(AdEventType.LOADED, () => {
        interstitial?.show();
    });
    // Start loading the interstitial straight away
    interstitial?.load();
    // Unsubscribe from events on unmount
    return unsubscribe;
}, [interstitial]);

  const onBannerAdsPress=()=>{
      navigation.navigate("InterstitialAdsScreen");
  }
  const onRewardAdsPress=()=>{
    navigation.navigate("RewardedAdsScreen");
}

  return (
    <View style={homeStyle.parentStyle}>
      <Text style={homeStyle.h1}>Integrate admob's ads in react native</Text>
      <MyButton btnName={"Interstitial Ads"} onBtnPress={()=> onBannerAdsPress()}/>
      <MyButton btnName={"Rewarded Ads"} onBtnPress={()=> onRewardAdsPress()}/>

      {/* component for banner ads      */}
      <Text style={{fontSize:20}}>Banner Ads</Text>
     
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
   
    </View>
  );
};

export default HomeScreen;

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

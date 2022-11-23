import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState,useEffect} from 'react';
  import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

  const adUnitId =  TestIds.REWARDED;

  const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });
  
  const RewardedAdsScreen = ({navigation}) => {
  
    useEffect(() => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            rewarded.show();
        });
        const unsubscribeEarned = rewarded.addAdEventListener(
          RewardedAdEventType.EARNED_REWARD,
          reward => {
            console.log('User earned reward of ', reward);
          },
        );
    
        // Start loading the rewarded ad straight away
        rewarded.load();
    
        // Unsubscribe from events on unmount
        return () => {
          unsubscribeLoaded();
          unsubscribeEarned();
        };
      }, []);
    return (
      <View style={homeStyle.parentStyle}>
        <Text style={homeStyle.h1}>Integrate admob's ads in react native</Text>
      </View>
    );
  };
  
  export default RewardedAdsScreen;
  
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
  
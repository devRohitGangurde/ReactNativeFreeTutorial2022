import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const LottieAnimationScreen = () => {
  return (
    <View style={{alignItems:"center"}}>

      <Lottie
      style={{width:300,height:300,alignItem:"center"}}
       source={require('./lottie/payment_failed.json')}
       autoPlay
       loop
      />
        {/* <Lottie
      style={{width:300,height:300,alignItem:"center"}}
       source={require('./lottie/payment_success.json')}
       autoPlay
       loop
      /> */}
       <Lottie
      style={{width:300,height:300,alignItem:"center"}}
       source={require('./lottie/no_data_found.json')}
       autoPlay
       loop
      />
     
    </View>
  );
};

export default LottieAnimationScreen;

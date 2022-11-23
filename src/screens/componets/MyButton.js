import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const MyButton = ({btnName,onBtnPress}) => {
  return (
    <View style={btnStyles.borderStyle}>
      <TouchableOpacity onPress={()=> onBtnPress()}>
      <Text style={btnStyles.buttonStyle}>{btnName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyButton

const btnStyles = StyleSheet.create({
  buttonStyle:{
    fontSize:24,
    paddingVertical:10,
    width:250,
    textAlign:"center"
  },
  borderStyle:{
    borderRadius:50,
    borderWidth:1,
    backgroundColor:'pink',
    marginTop:20,
    marginBottom:20
  }
})
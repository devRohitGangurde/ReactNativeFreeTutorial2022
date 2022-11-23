import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = ({route}) => {
  const firstName = route.params.firstName;
  const lastName = route.params.lastName;
 

  return (
    <View style={{justifyContent:"center",alignItems:"center",marginTop:100}}>
      <Text style={styles.textStyle}>{firstName}</Text>
      <Text style={styles.textStyle}>{lastName}</Text>


    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  textStyle:{
    fontSize:30
  }
})
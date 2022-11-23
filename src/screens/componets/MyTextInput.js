import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const MyTextInput = ({value,placeholder,color,onChangeInputText}) => {
  return (
    <View>
        <TextInput
         style={styles.txtInputStyle}
         value={value}
         placeholder={placeholder}
         placeholderTextColor={color}
         keyboardType={"default"}
         onChangeText={onChangeInputText}
        />
     
    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({
    txtInputStyle:{
        height:40,
        width:200,
        borderWidth:1,
        padding:10,
        borderRadius:30,
        borderColor:"blue",
        textAlign:"center",
        padding:10,
        backgroundColor:"pink",
        margin :10
    }
})
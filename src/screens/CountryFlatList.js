import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';

const COUNTRY_NAME_ARRAY = [
  {id: '1', name: 'INDIA'},
  {id: '2', name: 'AUSTRALIA'},
  {id: '3', name: 'BANGLADESH'},
  {id: '4', name: 'PAKISTAN'},
  {id: '5', name: 'USA'},
  {id: '6', name: 'UK'},
  {id: '7', name: 'CHINA'},
  {id: '8', name: 'JAPAN'},
  {id: '9', name: 'NEWZILAND'},
  {id: '10', name: 'SRILANKA'},
];

const CountryFlatList = () => {
  const renderCountryItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>{alert(item.id)}}>
      <View style={style.item}>
        <Text>{item.name}</Text>
      </View>
      </TouchableOpacity>
    );
  };
  const noItemDisplay = ({item}) => {
    return (
      <View>
        <Text>{"No Data found"}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text style={style.txtStyle}>Flat List Demo</Text>

      <FlatList
        horizontal={true}
        data={COUNTRY_NAME_ARRAY}
        renderItem={renderCountryItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
       
      />
      <FlatList
        data={COUNTRY_NAME_ARRAY}
        renderItem={renderCountryItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>no record found</Text>}
       // ListEmptyComponent={<Text>Country List</Text>}
        //ListFooterComponent={<Text>Country List</Text>}
        
       
      />
    </SafeAreaView>
  );
};

export default CountryFlatList;

const style = StyleSheet.create({
  txtStyle: {
    fontSize: 30,
    color: 'red',
    backgroundColor: 'pink',
    paddingHorizontal: 90,
    paddingVertical: 15,
  },
  parentStyle: {
    alignItems: 'center',
    flex: 1,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  txtInputStyle: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    width: 300,
    marginTop: 100,
    padding: 10,
  },
  item: {
    backgroundColor: '#f5f520',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

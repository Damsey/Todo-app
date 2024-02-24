import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//import { MaterialIcons } from './expo/vector-icons';
//import { MaterialIcons } from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TodoItem({item, pressHandler}){
  return(
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      <View style={styles.item}>
      {/* <MaterialIcons name="delete" size={18} color="black" /> */}
      <Ionicons name="md-checkmark-circle" size={32} color="green" />

      <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  item:{
    padding:16,
    marginTop: 16,
    borderColor: "rgb(238, 130, 238)",
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    fontSize: 18,
    flex: 1,
    backgroundColor: "pink",
    color: "rgb(255, 0, 128)",
    flexDirection: 'row',
    
  }, 
  itemText:{
    marginLeft: 10,
  }
})
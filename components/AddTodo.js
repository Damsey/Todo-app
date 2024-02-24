import React, {useState} from "react";
import {TextInput, Button, StyleSheet, Text, View } from "react-native";

export default function AddTodo({submitHandler}){

  const[text, setText] = useState("");

  const changeHandler = (val)=>{
    setText(val);
  }

  return(
    <View>
      <TextInput 
        placeholder="new todo...." onChangeText={changeHandler} style={styles.input}
      />
      <Button onPress={()=>submitHandler(text)} title='Add Task' color='pink'/>
    </View>
  )
}


const styles = StyleSheet.create({
  input:{
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(238, 130, 238)",
    color: 'white',
  }
,});
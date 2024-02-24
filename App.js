import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {FlatList,StyleSheet,Text,View,TouchableOpacity,ImageBackground,Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy bananas", key: "1" },
    { text: "learn React", key: "2" },
    { text: "play COD", key: "3" },
    { text: "pick up package", key: "4" },
    { text: "learn React-native", key: "5" },
    { text: "practice balancing more", key: "6" },
    { text: "practice bubbles more", key: "7" },
    { text: "Visit Helena", key: "8" },
    { text: "Valentine is coming up", key: "9" },
    { text: "Ride my bicycle, it's been a while", key: "10" },
    { text: "Do some cleaning", key: "11" },
    { text: "Finish my to-do app", key: "12" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTasks) => {
      return prevTasks.filter((task) => task.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length>3){
    setTodos((prevTasks) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTasks];
    });}
    else{
      Alert.alert('OOPS!', "Todos must be over 3 characters long... ", [{text:"Understood", onPress:()=>console.log('alert closed')}])
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("Dismissed Keyboard")}}>
    <View style={styles.container}>
      <ImageBackground source={require("./assets/barbie2.jpg")} style={styles.backgroundImage}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        {/* <Text> your app!</Text>
      <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  task: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 20,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 18,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    zIndex: -1,
  },
});

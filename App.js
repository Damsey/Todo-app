import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
const [todos, setTodos]=useState(
  [
    {text:'buy bananas', key:'1'},
    {text:'learn React-native', key:'2'},
    {text:'play COD', key:'3'}
  ]
);

  return (
    <View style={styles.container}>
      {/* {header} */}

      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
              <Text>{item.text}</Text>
            )
            }
          />
        </View>
      </View>
      <Text> your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content:{
    padding:40,
  }, 
  list:{
    marginTop:20,
  }
});

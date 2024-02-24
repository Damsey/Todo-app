import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header(){
  return(
    <View style={styles.header}>
    <View style={styles.headerTitle}>
    <Image source={require("../assets/barbielogo.jpg")} style={styles.headerImage} />
      <Text style={styles.headerText}>My Todos</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 'auto',
    width: "100%",
    //position: 'relative',
    // padding: 38,
    backgroundColor: 'rgb(255, 0, 128)',
    flexDirection: 'row',
    
    
   
    
  },
  headerTitle:{
    flexDirection: "row",
  },
  headerImage:{
    width: 40,
    height: 10,
    marginTop:40,
    marginHorizontal: 10,
    paddingTop: 38,
    //bottom: 0,
  },
  headerText:{
    //margin:10,
    paddingTop: 38,
    textShadowColor: 'grey',
    fontWeight: 'bold',
    fontSize: 28,
    color: 'pink',
    //alignItems: "center",
    //marginHorizontal : 10,
    //justifyContent: "center",
  }
});
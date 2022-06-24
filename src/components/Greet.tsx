import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import db from "../db/data.json";



const Greet = () => {
  return (
    <View style={styles.container}>
<Image style={styles.profilePicture} source={require('../../assets/hol.png')} />
      <FlatList data={db} renderItem={({ item }) => 
      <Text style={styles.greeting}>Welcome <Text style={styles.name}>{item.user}</Text></Text>} />
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({

container:{

  alignItems:"center",
},

profilePicture:{
width:100,
height:100,
},
  greeting:{
fontSize:20,
margin:10,
  },
  name:{
    fontSize:20,
    color:"#956bad",
    fontStyle:"italic"
  },
});

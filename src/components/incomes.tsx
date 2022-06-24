import { StyleSheet, Text, ScrollView, FlatList, View } from 'react-native'
import React from 'react'
import db from '../db/data.json'

const Incomes = () => {
  return (
 
    <FlatList
      data={db}
      renderItem={({ item }) => (
        <View style={styles.container}>
             <Text style={styles.title}>Incomes</Text>
          <FlatList
          style={styles.list}
            data={item.incomes}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            )}
          />
        </View>
      )}
      keyExtractor={(index) => index._id}
    />
  )
}

export default Incomes

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
            alignContent:"center",
    },
    list:{
        margin:10,
        alignItems:"center",
            alignContent:"center",
       
    },
    title:{
        color:"#956bad",
        fontSize:20,
        textAlign:"center"
    },
    date:{
color: "#D8D8D8",
fontSize:10,
    },
    category:{
fontSize:15,
color:"#868686",
    },
    amount:{
fontSize:20,
color:"#008C09"
    },
    comments:{

    },
})
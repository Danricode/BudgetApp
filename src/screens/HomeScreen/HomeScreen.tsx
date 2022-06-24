import { ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import Greet from '../../components/Greet'
import Expenses from '../../components/Expenses'
import Incomes from '../../components/incomes'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Greet/>
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
        <Expenses/>
      <Incomes/>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    marginTop:50,
  },
  list:{
 
  flexDirection:"row",
  }
})
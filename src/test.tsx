import { Text, StyleSheet, View, FlatList} from "react-native";
import React, { Component } from "react";
import db from "./db/data.json";

export default class HomeScreen extends Component {
  data: { _id: string; user: string; incomes: { date: string; amount: string; category: string; comments: string; _id_income: string; }[]; expenses: { date: string; amount: string; category: string; comments: string; _id_expense: string; }[]; }[];
  constructor(props: {}) {
    super(props);
    this.data = db;
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.user}</Text>
              <FlatList
                data={item.incomes}
                renderItem={({ item }) => (
                  <View>
                    <Text>Date:</Text>
                    <Text>{item.date}</Text>
                    <Text>Category:</Text>
                    <Text>{item.category}</Text>
                    <Text>Amount:</Text>
                    <Text>{item.amount}</Text>
                    <Text>Comments:</Text>
                    <Text>{item.comments}</Text>
                  </View>
                )}
              />
              <FlatList
                data={item.expenses}
                renderItem={({ item }) => (
                  <View>
                    <Text>Date:</Text>
                    <Text>{item.date}</Text>
                    <Text>Category:</Text>
                    <Text>{item.category}</Text>
                    <Text>Amount:</Text>
                    <Text>{item.amount}</Text>
                    <Text>Comments:</Text>
                    <Text>{item.comments}</Text>
                  </View>
                )}
              />
            </View>
          )}
          keyExtractor={(index) => index._id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});

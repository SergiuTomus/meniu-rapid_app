import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default class ProductsScreen extends Component {
    // static navigationOptions = {
    //     header: null
    // }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
        </View>
      );
    }
  }
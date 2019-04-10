import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class ShoppingCart extends Component {
  onCartPressed = () => {
    this.props.navigation.navigate('Order');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onCartPressed}>
        <View style={styles.cart}>
          <View style={styles.count}>
            <Text style={styles.text}>11</Text>
          </View>
          <Icon name="md-cart" size={30} color="#0B390E" />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cart: {
    padding: 8,
    marginRight: 20,
    height: 50,
    width: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#f0f0f5"
  },
  count: {
    position: 'absolute',
    height: 25,
    width: 25,
    backgroundColor: '#FB3232', //'rgba(95, 197,123,0.7)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    left: 30,
    bottom: 25,
    justifyContent: 'center',
    alignItems: "center",
    zIndex: 2000
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default ShoppingCart;



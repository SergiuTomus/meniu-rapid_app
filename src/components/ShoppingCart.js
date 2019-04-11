import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

class ShoppingCart extends Component {
  onCartPressed = () => {
    this.props.navigation.navigate('Order');
  }

  render() {
    let count;
    if (this.props.product_orders.length > 0) {
      count = (
        <View style={styles.count}>
          <Text style={styles.text}>{this.props.product_orders.length}</Text>
        </View>
      );
    } else {
      count = null;
    }

    return (
      <TouchableOpacity onPress={this.onCartPressed}>
        <View style={styles.cart}>
          {count}
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

const mapStateToProps = (state) => {
  return {
    product_orders: state.orderReducer.product_orders
  };
};

export default connect(mapStateToProps)(ShoppingCart);



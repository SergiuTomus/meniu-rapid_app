import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { sendOrder } from '../store/actions/orderActions';

class OrderScreen extends Component {
  onSendPress = () => {
    const order = {
      user_id: 2,
      user_name: "Amalia",
      user_phone: "0785115628",
      delivery_address: "o adresa oarecare",
      restaurant_id: 2,
      total_price: 40,
      product_orders: [{
        product_id: 1,
        product_name: "Gratar piept de pui",
        quantity: 1,
        single_price: 20,
        order_id: 13
      },
      {
        product_id: 7,
        product_name: "Pizza Spartan",
        quantity: 1,
        single_price: 20,
        order_id: 13
      }]
    };
    this.props.sendOrder(order);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Order Screen</Text>
        <Button
          title="Send"
          onPress={this.onSendPress}
        />
      </View>
    );
  }
}

export default connect(null, { sendOrder })(OrderScreen);
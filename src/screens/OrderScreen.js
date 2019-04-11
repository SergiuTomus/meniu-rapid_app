import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { connect } from 'react-redux';
import { sendOrder } from '../store/actions/orderActions';

class OrderScreen extends Component {
  onSendPress = () => {
    let price = 0;
    this.props.product_orders.map((product) => { price += product.single_price; })
    totalPrice = parseFloat(price).toFixed(2)

    const order = {
      user_id: 2,                            // dupa autentificare, din state auth
      user_name: "Amalia",                   // dupa autentificare
      user_phone: "0785115628",              // dupa autentificare
      delivery_address: "o adresa oarecare", // dupa autentificare
      restaurant_id: this.props.selectedRestaurant.id,
      total_price: totalPrice,
      product_orders: this.props.product_orders
    };
    if (price !== 0) {
      this.props.sendOrder(order);
    } else {
      alert("Pentru a trimite comanda este nevoie sa adaugati cel putin un produs in cos.");
    }
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

const mapStateToProps = (state) => {
  return {
    product_orders: state.orderReducer.product_orders,
    selectedRestaurant: state.restaurantReducer.selectedRestaurant // 0741607941 0756418484
  };
};

export default connect(mapStateToProps, { sendOrder })(OrderScreen);
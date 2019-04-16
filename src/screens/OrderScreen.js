import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import { sendOrder } from '../store/actions/orderActions';
import ShoppingCart from '../components/ShoppingCart';
import CustomButton from '../components/CustomButton';

class OrderScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (<ShoppingCart navigation={navigation} />)
    };
  };

  onSendPress = () => {
    let price = 0;
    this.props.product_orders.map((product) => { price += product.single_price; })
    totalPrice = parseFloat(price).toFixed(2)
    const { user } = this.props.auth;

    const order = {
      user_name: user.name,                   // dupa autentificare
      user_phone: user.phone,              // dupa autentificare
      delivery_address: user.delivery_address, // dupa autentificare
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
    let sendOrder = (
      <CustomButton
        buttonText="TRIMITE COMANDA"
        buttonPressed={this.onSendPress}
      />
    );
    if (this.props.loading) {
      sendOrder = (
        <ActivityIndicator size={40} color="#156D14" />
      );
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Order Screen</Text>
        {sendOrder}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product_orders: state.orderReducer.product_orders,
    selectedRestaurant: state.restaurantReducer.selectedRestaurant,
    loading: state.loadingReducer.loading,
    auth: state.authReducer
  };
};

export default connect(mapStateToProps, { sendOrder })(OrderScreen);
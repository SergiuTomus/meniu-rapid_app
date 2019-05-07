import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { sendOrder } from '../store/actions/orderActions';
import ShoppingCart from '../components/ShoppingCart';
import StrikeToTitle from '../components/StrikeToTitle';
import CustomButton from '../components/CustomButton';
import strikeToTitle from './../components/StrikeToTitle';
import restaurant from './../components/Restaurant';

class OrderScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (<ShoppingCart navigation={navigation} />)
    };
  };

  onSendPress = (totalPrice) => {
    const { user } = this.props.auth;

    const order = {
      user_name: user.name,                  
      user_phone: user.phone,             
      delivery_address: user.delivery_address,
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
    let price = 0;
    let products = this.props.product_orders.map((product, index) => {
      price += product.single_price;
      totalPrice = parseFloat(price).toFixed(2);
      console.log( product, "pret total", totalPrice, typeof product.single_price);
      return (
        <View style={{ flexDirection: "row", width: "100%" }} key={index}>
          <View style={{marginRight: 2, width: "73%"}}>
            <Text style={{fontSize: 18, marginLeft: 20}}>* {product.product_name}</Text>
          </View>
          <View style={{marginRight: 2, alignSelf: 'flex-end', width: "27%" }}>
            <Text style={{fontSize: 18, textAlign: 'right', marginRight: 10}}>{product.single_price} lei</Text>
          </View> 
        </View>
      );
    });
    let sendOrder = (
      <CustomButton
        buttonText="TRIMITE COMANDA"
        buttonPressed={() => this.onSendPress(totalPrice)}
      />
    );
    if (this.props.loading) {
      sendOrder = (
        <ActivityIndicator size={40} color="#156D14" />
      );
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.order} >
          <Text style={{ fontSize: 22, color: '#156D14' }}>COMANDA MEA</Text>
          <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10 }}>Restaurant {this.props.selectedRestaurant.name}</Text>
          <StrikeToTitle title="PRODUSE SELECTATE"/>
          <View style={{marginTop: 10, width: "100%"}}>
            {products}
          </View>
          <StrikeToTitle title="PRET TOTAL"/>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{totalPrice} lei</Text>
        </View>
        {sendOrder}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  order: {
    padding: 10,
    width: "90%",
    borderBottomColor: "gray",
    backgroundColor: "#f0f0f5",
    marginTop: 6,
    marginBottom: 4,
    marginRight: 20,
    marginLeft: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    fontWeight: "bold",
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  }
});

const mapStateToProps = (state) => {
  return {
    product_orders: state.orderReducer.product_orders,
    selectedRestaurant: state.restaurantReducer.selectedRestaurant,
    loading: state.loadingReducer.loading,
    auth: state.authReducer
  };
};

export default connect(mapStateToProps, { sendOrder })(OrderScreen);
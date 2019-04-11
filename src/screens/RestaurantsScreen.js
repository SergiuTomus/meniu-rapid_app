import React, { Component } from "react";
import { View } from "react-native";
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { getRestaurants } from '../store/actions/restaurantActions';
import { emptyCart } from '../store/actions/orderActions';

class RestaurantsScreen extends Component {

  componentDidMount() {
    this.props.getRestaurants();
  }

  onSelectRestaurant = (id) => {
    this.props.emptyCart();
    this.props.navigation.navigate('SelectedRestaurant', { id: id });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <RestaurantList
          restaurants={this.props.restaurants}
          onItemSelected={this.onSelectRestaurant}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantReducer.restaurants,
    product_orders: state.orderReducer.product_orders
  };
};

export default connect(mapStateToProps, { getRestaurants, emptyCart })(RestaurantsScreen);
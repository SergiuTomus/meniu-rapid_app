import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { getRestaurants, deselectRestaurant } from '../store/actions/restaurantActions';
import { emptyCart } from '../store/actions/orderActions';

class RestaurantsScreen extends Component {

  componentDidMount() {
    this.props.getRestaurants();
  }

  onSelectRestaurant = (id) => {
    this.props.deselectRestaurant();
    this.props.emptyCart();
    this.props.navigation.navigate('SelectedRestaurant', { id: id });
  }

  render() {
    let restaurants;
    if (this.props.loading) {
      restaurants = (
        <ActivityIndicator size={80} color="#156D14" />
      );
    } else {
      restaurants = (
        <RestaurantList
          restaurants={this.props.restaurants}
          onItemSelected={this.onSelectRestaurant}
        />
      );
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        {restaurants}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantReducer.restaurants,
    product_orders: state.orderReducer.product_orders,
    loading: state.loadingReducer.loading
  };
};

export default connect(mapStateToProps, { getRestaurants, emptyCart, deselectRestaurant })(RestaurantsScreen);
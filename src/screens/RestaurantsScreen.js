import React, { Component } from "react";
import { View } from "react-native";
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { getRestaurants } from '../store/actions/restaurantActions';

class RestaurantsScreen extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  onSelectRestaurant = (id) => {
    this.props.navigation.navigate('SelectedRestaurant', { id: id });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    restaurants: state.restaurantsReducer.restaurants
  };
};

export default connect(mapStateToProps, { getRestaurants })(RestaurantsScreen);
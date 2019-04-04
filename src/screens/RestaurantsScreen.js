import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { selectRestaurant, getRestaurants } from '../store/actions/restaurantActions';

class RestaurantsScreen extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RestaurantList
          restaurants={this.props.restaurants}
          // onItemSelected={this.props.onSelectRestaurant}
          navigate={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantsReducer.restaurants,
    selectedRestaurant: state.restaurantsReducer.selectedRestaurant
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSelectRestaurant: (key, navigate) => {
//       navigate.navigate('SelectedRestaurant');
//       return dispatch(selectRestaurant(key))
//     },
//   };
// };

export default connect(mapStateToProps, { getRestaurants })(RestaurantsScreen);
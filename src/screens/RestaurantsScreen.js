import React, { Component } from "react";
import { View } from "react-native";
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { getRestaurants } from '../store/actions/restaurantActions';
import ShoppingCart from '../components/ShoppingCart';

class RestaurantsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (<ShoppingCart navigation={navigation} />)
    };
  };

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
    restaurants: state.restaurantReducer.restaurants
  };
};

export default connect(mapStateToProps, { getRestaurants })(RestaurantsScreen);
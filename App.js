import React, { Component } from "react";
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import AuthScreen from './src/screens/AuthScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import SelectedRestaurantScreen from './src/screens/SelectedRestaurantScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import DeliveryAddressesScreen from './src/screens/DeliveryAddressesScreen';

const RestaurantsStackNavigator = createStackNavigator(
  {
    Restaurants: RestaurantsScreen,
    SelectedRestaurant: SelectedRestaurantScreen,
    Products: ProductsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#BB2D04'
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    RestaurantsStack: RestaurantsStackNavigator,
    Autentificare: AuthScreen,
    Adrese_de_livrare: DeliveryAddressesScreen

  },
  {
    initialRouteName: "RestaurantsStack"
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
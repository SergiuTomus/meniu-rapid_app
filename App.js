import React, { Component } from "react";
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import AuthScreen from './src/screens/AuthScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import SelectedRestaurantScreen from './src/screens/SelectedRestaurantScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import DeliveryAddressesScreen from './src/screens/DeliveryAddressesScreen';
import OrderScreen from "./src/screens/OrderScreen";
import ShoppingCart from './src/components/ShoppingCart'
import Icon from 'react-native-vector-icons/Ionicons';

const RestaurantsStackNavigator = createStackNavigator(
  {
    Restaurants: RestaurantsScreen,
    SelectedRestaurant: SelectedRestaurantScreen,
    Products: ProductsScreen,
    Order: OrderScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1A7919'
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    RESTAURANTE: RestaurantsStackNavigator,
    AUTENTIFICARE: AuthScreen,
    'ADRESE DE LIVRARE': DeliveryAddressesScreen

  },
  {
    initialRouteName: "RESTAURANTE"
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
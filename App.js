import React, { Component } from "react";
import { createDrawerNavigator, createStackNavigator, createAppContainer, SafeAreaView, DrawerItems } from "react-navigation";
import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import AuthScreen from './src/screens/AuthScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import SelectedRestaurantScreen from './src/screens/SelectedRestaurantScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import DeliveryAddressesScreen from './src/screens/DeliveryAddressesScreen';
import OrderScreen from "./src/screens/OrderScreen";
import RegisterScreen from './src/screens/RegisterScreen';
import Logout from './src/components/Logout';
import Drawer from './src/components/Drawer';

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

const AuthDrawerNavigator = createDrawerNavigator(
  {
    RESTAURANTE: RestaurantsStackNavigator,
    'ADRESA DE LIVRARE': DeliveryAddressesScreen
  },
  {
    initialRouteName: "RESTAURANTE",
    contentComponent: Logout
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    RESTAURANTE: RestaurantsStackNavigator,
    AUTENTIFICARE: AuthScreen,
    INREGISTRARE: RegisterScreen
  },
  {
    initialRouteName: "RESTAURANTE",
    contentComponent: Drawer
  }
);


const AuthContainer = createAppContainer(AuthDrawerNavigator);
const AppContainer = createAppContainer(AppDrawerNavigator);

class App extends Component {
  render() {
    if (this.props.authenticated) {
      return <AuthContainer />;
    } else {
      return <AppContainer />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authReducer.authenticated
  };
};

export default connect(mapStateToProps)(App);
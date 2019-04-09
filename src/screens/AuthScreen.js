import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AuthScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Auth Screen</Text>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button
            title="Register"
            onPress={() => this.props.navigation.navigate('Register')}
          />
          <Icon name="rocket" size={30} color="#900" />
        </View>
      );
    }
  }
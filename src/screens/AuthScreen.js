import React, { Component } from "react";
import { Button, View, Text } from "react-native";

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
        </View>
      );
    }
  }
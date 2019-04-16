import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { SafeAreaView, DrawerItems } from "react-navigation";
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';
import Icon from 'react-native-vector-icons/Ionicons';

class Logout extends Component {
  onLogout = () => {
    this.props.logoutUser();
  }

  render() {
    console.log(this.props.user.name);
    return (
      <SafeAreaView style={{ backgroundColor: '#c6ecd8', flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{ flexDirection: 'row', backgroundColor: "#156D14", height: 80 }}>
          <Icon name="md-person" size={40} color="#f0f0f5" style={{ marginLeft: 16, marginTop: 36 }} />
          <Text style={{ marginLeft: 15, marginTop: 50, fontWeight: 'bold', color: '#f0f0f5', fontSize: 20 }} >{this.props.user.name}</Text>
        </View>
        <DrawerItems {...this.props} />
        <TouchableOpacity onPress={this.onLogout}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="ios-log-out" size={20} color="black" style={{ marginLeft: 16, marginTop: 16 }} />
            <Text style={{ marginLeft: 5, marginTop: 16, fontWeight: 'bold', color: 'black' }} >DECONECTARE</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps, { logoutUser })(Logout);
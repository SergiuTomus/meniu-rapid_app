import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { SafeAreaView, DrawerItems } from "react-navigation";
// import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';
import Icon from 'react-native-vector-icons/Ionicons';

class Drawer extends Component {
  onLogout = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#c6ecd8', flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{ flexDirection: 'row', backgroundColor: "#156D14", height: 80 }}>
          <Icon name="md-person" size={40} color="#f0f0f5" style={{ marginLeft: 16, marginTop: 40 }} />
        </View>
        <DrawerItems {...this.props} />
      </SafeAreaView >
    );
  }
}

export default Drawer;
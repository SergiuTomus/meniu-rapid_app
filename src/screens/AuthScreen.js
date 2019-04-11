import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CustomButton from '../components/CustomButton';
import StrikeToTitle from '../components/StrikeToTitle';

class AuthScreen extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChange = event => {
    // this.setState({ [event.target.name]: event.target.value }); // for all inputs
  }

  onButtonPressed = () => {
    this.props.navigation.navigate('INREGISTRARE');
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: -150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <StrikeToTitle title="Autentificare" />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={this.state.email}
          onChange={this.onChange} />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={this.state.password}
          onChange={this.onChange} />
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <CustomButton buttonText="AUTENTIFICARE" />
        </View>
        <StrikeToTitle title="********" />
        <View style={{ marginTop: 10 }}>
          <CustomButton buttonText="CREAZA CONT" buttonPressed={this.onButtonPressed} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '87%',
    backgroundColor: '#f0f0f5',
    borderColor: '#f0f0f5',
    borderBottomColor: "#156D14",
    borderWidth: 1,
    marginTop: 15
  }
});

export default AuthScreen;
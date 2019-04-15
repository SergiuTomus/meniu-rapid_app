import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, TextInput, StyleSheet } from "react-native";
import CustomButton from '../components/CustomButton';
import StrikeToTitle from '../components/StrikeToTitle';
import { loginUser } from '../store/actions/authActions';

class AuthScreen extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onSubmit = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(user);
    alert("Autentificare cu succes"); // tr adus mesajul din API
    this.props.navigation.navigate('RESTAURANTE');
  }

  onButtonPressed = () => {
    this.props.navigation.navigate('INREGISTRARE');
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: -40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <StrikeToTitle title="Autentificare" />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={this.state.email}
          onChangeText={(value) => this.setState({ email: value })} />
        <TextInput
          style={styles.input}
          placeholder='Parola'
          value={this.state.password}
          onChangeText={(value) => this.setState({ password: value })} />
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <CustomButton buttonText="AUTENTIFICARE" buttonPressed={this.onSubmit} />
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

export default connect(null, { loginUser })(AuthScreen);
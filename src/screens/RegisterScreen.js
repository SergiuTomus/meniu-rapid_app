import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CustomButton from '../components/CustomButton';
import StrikeToTitle from '../components/StrikeToTitle';

class RegisterScreen extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }); // for all inputs
  }

  render() {
    return (
      <View style={{ marginTop: 80, alignItems: 'center', justifyContent: 'center' }}>
        <StrikeToTitle title="Inregistrare cont" />
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
          <CustomButton buttonText="INREGISTRARE" />
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

export default RegisterScreen;
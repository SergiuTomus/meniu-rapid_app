import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import CustomButton from '../components/CustomButton';
import StrikeToTitle from '../components/StrikeToTitle';
import { registerUser } from '../store/actions/authActions';

class RegisterScreen extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    delivery_address: '',
    errors: {}
  };

  onSubmit = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phone: this.state.phone,
      delivery_address: this.state.delivery_address
    }
    this.props.registerUser(user);
    alert("Contul a fost creat cu succes"); // tr adus mesajul din API
    this.props.navigation.navigate('AUTENTIFICARE');
  }

  render() {
    return (
      <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <StrikeToTitle title="Inregistrare cont" />
        <TextInput
          style={styles.input}
          placeholder='Nume'
          value={this.state.name}
          onChangeText={(value) => this.setState({ name: value })} />
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
        <TextInput
          style={styles.input}
          placeholder='Confirmare parola'
          value={this.state.password2}
          onChangeText={(value) => this.setState({ password2: value })} />
        <TextInput
          style={styles.input}
          placeholder='Telefon'
          value={this.state.phone}
          onChangeText={(value) => this.setState({ phone: value })} />
        <TextInput
          style={styles.input}
          placeholder='Adresa de livrare'
          value={this.state.delivery_address}
          onChangeText={(value) => this.setState({ delivery_address: value })} />
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <CustomButton buttonText="INREGISTRARE" buttonPressed={this.onSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '87%',
    height: 45,
    backgroundColor: '#f0f0f5',
    borderColor: '#f0f0f5',
    borderBottomColor: "#156D14",
    borderWidth: 1,
    marginTop: 15
  }
});

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer
  };
};

export default connect(mapStateToProps, { registerUser })(RegisterScreen);
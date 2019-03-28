import React, { Component } from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import ContactInfo from '../components/ContactInfo';
import placeImage4 from '../assets/logo4.png';

class SelectedRestaurantScreen extends Component {
  state = {
    showContact: null
  };

  showContactInfo = (key) => {
    this.setState(prevState => {
      return {
        showContact:  {
          key: Math.random().toString(),
          name: "Chili Pistols",
          image: placeImage4
        }
      }
    });
  };

  modalClosed = () => {
    this.setState({
      showContact: null
    });
  };

  render() {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={placeImage4} style={styles.restaurantImage}/>
            <Text style={styles.restaurantName}>Restaurant Name</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <ContactInfo 
                  selectedRestaurant={this.state.showContact}
                  onModalClosed={this.modalClosed}
                />
                <Button
                  title="Contact"
                  onPress={this.showContactInfo}
                />
                <Button
                  title="Go to ProductsList"
                  onPress={() => this.props.navigation.navigate('Products')}
                />
            </View>
        </View>       
    );
  }
}

const styles = StyleSheet.create({
  restaurantImage: { 
    height: 200,
    width: 200,
    alignItems: "center",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  },
  restaurantName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
  } 
});

const mapStateToProps = (state) => {
  return {
    selectedRestaurant: state.restaurantsReducer.selectedRestaurant
  };
};


export default connect(mapStateToProps)(SelectedRestaurantScreen);
import React, { Component } from "react";
import { FlatList, View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { connect } from 'react-redux';
import InfoModal from '../components/InfoModal';
import Category from '../components/Category';
import spinner from '../assets/spinner.gif';
import { getRestaurant } from '../store/actions/restaurantActions';
import { API_BASE_URL } from '../api/config';
import StrikeToTitle from "../components/StrikeToTitle";

class SelectedRestaurantScreen extends Component {
  state = {
    showContact: false
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id', 'no_key');
    this.props.getRestaurant(id);
  }

  showContactInfo = () => {
    this.setState(prevState => {
      return {
        showContact: true
      }
    });
  };

  modalClosed = () => {
    this.setState({
      showContact: false
    });
  };

  categorySelected = (id) => {
    console.log(id);
    this.props.navigation.navigate('Products', { id: id });
  }

  render() {
    let restaurantContent;
    if (this.props.selectedRestaurant === null) {
      restaurantContent = (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={spinner} style={styles.restaurantImage} />
        </View>
      );
    } else {
      restaurantContent = (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground source={require('../assets/food-table.jpg')} style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Image source={{ uri: `${API_BASE_URL}/${this.props.selectedRestaurant.image_url}` }} style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>Restaurant {this.props.selectedRestaurant.name}</Text>
            <TouchableOpacity onPress={this.showContactInfo}>
              <View style={styles.contact}>
                <Text style={{ color: '#156D14', fontSize: 15, fontWeight: "bold" }}>CONTACT INFO</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
          <InfoModal
            restaurant={this.props.selectedRestaurant}
            showContact={this.state.showContact}
            onModalClosed={this.modalClosed}
          />
          <StrikeToTitle title="CATEGORII DE PRODUSE" />
          <FlatList
            style={{ width: '100%', marginTop: 5, textAlign: 'center', height: 320 }}
            data={this.props.selectedRestaurant.Categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(info) => (
              <Category
                categoryName={info.item.name}
                key={info.item.id}
                onItemPressed={() => this.categorySelected(info.item.id)}
              />
            )}
          />
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
          </View>
        </View>
      )
    }

    return (
      <View>
        {restaurantContent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  restaurantImage: {
    marginTop: 15,
    width: 200,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  restaurantName: {
    fontWeight: "bold",
    color: '#156D14',
    // backgroundColor: " ",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
    textAlign: "center",
    fontSize: 28
  },
  contact: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderWidth: 1,
    // borderColor: '#156D14',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
});

const mapStateToProps = (state) => {
  return {
    selectedRestaurant: state.restaurantsReducer.selectedRestaurant
  };
};

export default connect(mapStateToProps, { getRestaurant })(SelectedRestaurantScreen);
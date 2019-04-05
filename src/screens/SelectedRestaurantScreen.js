import React, { Component } from "react";
import { FlatList, View, Image, Text, Button, StyleSheet, ScrollView } from "react-native";
import { connect } from 'react-redux';
import InfoModal from '../components/InfoModal';
import Category from '../components/Category';
import spinner from '../assets/spinner.gif';
import { getRestaurant } from '../store/actions/restaurantActions';
import { API_BASE_URL } from '../api/config';

class SelectedRestaurantScreen extends Component {
  state = {
    showContact: false
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id', 'no_key');
    console.log("restaurant id: ", id);
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
    console.log('category id', id);
    console.log("data", this.props.selectedRestaurant.Categories);
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
      console.log('restaurant categori', this.props.selectedRestaurant.Categories);
      restaurantContent = (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={{ uri: `${API_BASE_URL}/${this.props.selectedRestaurant.image_url}` }} style={styles.restaurantImage} />
          <Text style={styles.restaurantName}>Restaurant {this.props.selectedRestaurant.name}</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <InfoModal
              restaurant={this.props.selectedRestaurant}
              showContact={this.state.showContact}
              onModalClosed={this.modalClosed}
            />
            <Button
              title="Contact info"
              onPress={this.showContactInfo}
            />
            {/* <Button
              title="Go to ProductsList"
              onPress={() => this.props.navigation.navigate('Products')}
            /> */}
          </View>
          {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}> */}
          <FlatList
            style={{ border: 2, backgroundColor: "yellow", width: '100%' }}
            data={this.props.selectedRestaurant.Categories}
            renderItem={(info) => (
              <View>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
                <Text>Ceva</Text>
              </View>
              // <Category
              //   categoryName={info.item.name}
              //   key={info.item.id}
              //   onItemPressed={() => this.categorySelected(info.item.id)}
              // />
            )}
          />
          {/* </View> */}
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
    marginTop: 10,
    width: 300,
    height: 200,
    alignItems: "center",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
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

export default connect(mapStateToProps, { getRestaurant })(SelectedRestaurantScreen);
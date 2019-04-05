import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../api/config';

const infoModal = props => {
  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.showContact !== false} animationType="slide">
      <View style={styles.modalContainer}>
        <Image source={{ uri: `${API_BASE_URL}/${props.restaurant.image_url}` }} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}>{props.restaurant.name}</Text>
        <Text>Adresa: {props.restaurant.address}</Text>
        <Text>Telefon: {props.restaurant.phone}</Text>
        <Text>Program: </Text>
        <Text>Luni-Vineri: {props.restaurant.week_program}</Text>
        <Text>Sambata: {props.restaurant.saturday_program}</Text>
        <Text>Duminica: {props.restaurant.sunday_program}</Text>
        <Text>Comanda minima: {props.restaurant.minimum_order} lei</Text>
        <Text>Cost livrare: {props.restaurant.cost_delivery} lei</Text>
        <View>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  restaurantImage: {
    width: "100%",
    height: 200
  },
  restaurantName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }

});

export default infoModal;
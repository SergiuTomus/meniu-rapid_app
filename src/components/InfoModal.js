import React from 'react';
import { Modal, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../api/config';
import CustomButton from '../components/CustomButton';
import StrikeToTitle from './StrikeToTitle';

const infoModal = props => {
  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.showContact !== false} animationType="slide">
      <View style={styles.modalContainer}>
        <Image source={{ uri: `${API_BASE_URL}/${props.restaurant.image_url}` }} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}>{props.restaurant.name}</Text>
        <StrikeToTitle title="INFO" />
        <Text style={styles.text}>Adresa: {props.restaurant.address}</Text>
        <Text style={styles.text}>Telefon: {props.restaurant.phone}</Text>
        <Text style={styles.text}>Comanda minima: {props.restaurant.minimum_order} lei</Text>
        <Text style={styles.text}>Cost livrare: {props.restaurant.cost_delivery} lei</Text>
        <StrikeToTitle title="PROGRAM" />
        <Text style={styles.text}>Luni-Vineri: {props.restaurant.week_program}</Text>
        <Text style={styles.text}>Sambata: {props.restaurant.saturday_program}</Text>
        <Text style={styles.text}>Duminica: {props.restaurant.sunday_program}</Text>
        <CustomButton style={{ marginTop: 50 }} buttonPressed={props.onModalClosed} buttonText="Inchide" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28
  },
  restaurantImage: {
    width: "100%",
    height: 200
  },
  restaurantName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  text: {
    fontSize: 18
  }

});

export default infoModal;
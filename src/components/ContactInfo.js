import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const contactInfo = props => {
    let modalContent = null;

    if (props.selectedRestaurant) {
        modalContent = (
            <View>
                <Image source={props.selectedRestaurant.image} style={styles.restaurantImage}/>
                <Text style={styles.restaurantName}>{props.selectedRestaurant.name}</Text>
                <Text>Adresa: str. Decebal, nr 17</Text>
                <Text>Telefon: 0258826545</Text>
                <Text>Program: </Text>
                <Text>luni-vineri: 09:00 - 22:00</Text>
                <Text>sambata: 10:00 - 20:00</Text>
                <Text>duminica: inchis</Text>
            </View>
        );
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedRestaurant !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Close" onPress={props.onModalClosed}/>
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

export default contactInfo;
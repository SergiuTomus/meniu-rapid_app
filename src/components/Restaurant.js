import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const restaurant = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onItemPressed()}>
      <View style={styles.restaurant} >
        <Image source={{ uri: `${props.restaurantImage}` }} style={styles.restaurantImage} />
        <View style={{ alignItems: "center", width: "70%" }}>
          <Text style={{ color: "#156D14", fontSize: 19, marginBottom: 6 }}>{props.restaurantName}</Text>
          <View style={{ flexDirection: "row", paddingTop: 5 }}>
            <Icon name="money" size={18} color="green" style={{ paddingTop: 3 }} />
            <Text style={{ color: "#156D14", fontSize: 16, marginLeft: 4, marginRight: 12 }}>min: {props.minOrder} lei</Text>
            <Icon name="truck" size={18} color="green" style={{ paddingTop: 2, transform: [{ rotateY: '180deg' }] }} />
            <Text style={{ color: "#156D14", fontSize: 16, marginLeft: 2 }}> {props.costDelivery == 0 ? "gratis" : props.costDelivery + " lei"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurant: {
    // width: "100%",
    padding: 10,
    backgroundColor: "#f0f0f5",
    marginTop: 8,
    marginBottom: 4,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 105,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,

  },
  restaurantImage: {
    marginRight: 0,
    height: 85,
    width: 110,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
});

export default restaurant;
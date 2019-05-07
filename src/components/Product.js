import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const product = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onItemPressed()}>
      <View style={styles.product} >
        <View style={{ width: "30%", backgroundColor: "red"}}>
          <Text style={{ fontSize: 10, color: '#156D14' }}>{props.productName}</Text>
        </View>
        <View style={{ width: "70%", backgroundColor: "yellow", alignItems: "center"}}>
          <Text style={{ fontSize: 20, color: '#156D14' }}>{props.productName}</Text>
          <Text style={{ fontSize: 17, color: '#156D14' }}>Pret: {props.productPrice} lei</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 10,
    borderBottomColor: "gray",
    backgroundColor: "#f0f0f5",
    marginTop: 6,
    marginBottom: 4,
    marginLeft: "5%",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    width: "90%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    fontWeight: "bold",
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  }
});

export default product;
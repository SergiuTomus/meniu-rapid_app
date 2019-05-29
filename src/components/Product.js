import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const product = (props) => {
  return (
    <View style={styles.product} >
      <View style={{ width: "45%" }}>
        <Image source={{ uri: `${props.productImage}` }} style={styles.productImage} />
      </View>
      <View style={{ width: "55%", alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: '#156D14' }}>{props.productName}</Text>
        <Text style={{ fontSize: 17, color: '#156D14' }}>Pret: {props.productPrice} lei</Text>
        <TouchableOpacity onPress={() => props.onItemPressed()} style={styles.addToCart}>
          <Icon name="plus" size={17} color="white" />
        </TouchableOpacity>
      </View>
    </View>

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
    height: 115,
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
  },
  productImage: {
    marginRight: 16,
    height: 100,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  addToCart: {
    backgroundColor: "#156D14",
    width: "55%",
    marginTop: 10,
    alignItems: "center",
    padding: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default product;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StrikeToTitle from '../components/StrikeToTitle';

const order = (props) => {

  let products = props.products.map((product, index) => {
    return (
      <View style={{ flexDirection: "row", width: "100%" }} key={index}>
        <View style={{ marginRight: 2, width: "73%" }}>
          <Text style={{ fontSize: 18, marginLeft: 20 }}>* {product.product_name}</Text>
        </View>
        <View style={{ marginRight: 2, alignSelf: 'flex-end', width: "27%" }}>
          <Text style={{ fontSize: 18, textAlign: 'right', marginRight: 10 }}>{product.single_price} lei</Text>
        </View>
      </View>
    );
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.order} >
          <Text style={{ fontSize: 22, color: '#156D14' }}>Comanda {props.status}</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>Nr# {props.number}</Text>
          <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10 }}>Restaurant {props.restaurantName}</Text>
          <StrikeToTitle title="PRODUSE COMANDATE" />
          
          <View style={{ marginTop: 10, width: "100%" }}>
            {products}
          </View>
          <StrikeToTitle title="PRET TOTAL" />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.totalPrice} lei</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  order: {
    padding: 10,
    width: "90%",
    borderBottomColor: "gray",
    backgroundColor: "#f0f0f5",
    marginTop: 6,
    marginBottom: 4,
    marginRight: 20,
    marginLeft: 20,
    alignItems: "center",
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

export default order;
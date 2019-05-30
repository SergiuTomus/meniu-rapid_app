import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const order = (props) => {
  return (
    <View style={styles.order} >
      <View style={{ width: "55%", alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: '#156D14' }}>{props.status}</Text>
        <Text style={{ fontSize: 17, color: '#156D14' }}>{props.totalPrice}</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  order: {
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
  }
});

export default order;
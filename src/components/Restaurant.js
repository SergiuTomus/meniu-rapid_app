import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const restaurant = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onItemPressed()}>
      <View style={styles.restaurant} >
        <Image source={{ uri: `${props.restaurantImage}` }} style={styles.restaurantImage} />
        <Text style={{ color: "#156D14", fontSize: 19 }}>{props.restaurantName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurant: {
    // width: "100%",
    padding: 10,
    backgroundColor: "#f0f0f5",
    marginTop: 12,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 85,
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
    marginRight: 16,
    height: 65,
    width: 80,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
});

export default restaurant;
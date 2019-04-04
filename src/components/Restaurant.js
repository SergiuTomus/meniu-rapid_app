import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const restaurant = (props) => {
  console.log(props.restaurantImage);
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.restaurant} >
        <Image source={{ uri: `${props.restaurantImage}` }} style={styles.restaurantImage} />
        <Text>{props.restaurantName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurant: {
    // width: "100%",
    padding: 10,
    backgroundColor: "#F9D067",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 85,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15

  },
  restaurantImage: {
    marginRight: 8,
    height: 65,
    width: 80,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
});

export default restaurant;
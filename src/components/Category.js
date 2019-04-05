import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const category = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onItemPressed()}>
      <View style={styles.category} >
        <Text>{props.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    // width: "100%",
    padding: 10,
    backgroundColor: "gray",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15

  }
});

export default category;
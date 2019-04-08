import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const customButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.buttonPressed()}>
      <View style={styles.category} >
        <Text style={{ fontSize: 20, color: '#156D14' }}>{props.buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 10,
    borderBottomColor: "gray",
    backgroundColor: "#f0f0f5",
    marginTop: 10,
    marginRight: 80,
    marginLeft: 80,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    fontWeight: "bold",
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 4,
    // borderWidth: 10,
    borderColor: '#f0f0f5',
  }
});

export default customButton;
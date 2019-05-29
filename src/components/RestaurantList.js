import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Restaurant from './Restaurant';

const restaurantList = props => {
  return <FlatList
    style={styles.listContainer}
    data={props.restaurants}
    renderItem={(info) => (
      <Restaurant
        restaurantName={info.item.name}
        restaurantImage={info.item.image}
        minOrder={info.item.minimum_order}
        costDelivery={info.item.cost_delivery}
        key={info.item.key}
        onItemPressed={() => props.onItemSelected(info.item.key)}
      />
    )}
  />;
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default restaurantList;
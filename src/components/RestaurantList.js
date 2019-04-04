import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Restaurant from './Restaurant';

const restaurantList = props => {
  return <FlatList
    style={styles.listContainer}
    data={props.restaurants}   // data tr sa fie un array
    renderItem={(info) => (
      <Restaurant
        restaurantName={info.item.name}
        restaurantImage={info.item.image}
        key={info.item.key}
        onItemPressed={() => props.onItemSelected(info.item.key, props.navigate)}
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
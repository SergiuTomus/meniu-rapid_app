import React from 'react';
import { View, Text } from 'react-native';

const strikeToTitle = (props) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 14 }}>
      <View style={{ backgroundColor: 'rgba(210, 210, 210, 1)', height: 2, flex: 1, alignSelf: 'center' }} />
      <Text style={{ alignSelf: 'center', paddingHorizontal: 10, fontSize: 17, color: 'rgba(112, 112, 112, 1)', fontWeight: "bold" }}>{props.title}</Text>
      <View style={{ backgroundColor: 'rgba(210, 210, 210, 1)', height: 2, flex: 1, alignSelf: 'center' }} />
    </View>
  );
};

export default strikeToTitle;
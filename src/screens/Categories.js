import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import * as workersData from '../workersData.json'
import { getFlag } from '../helpers';

export default function Categories() {
  const { height, width } = useWindowDimensions();
  // console.log('workersData', workersData);

  const renderWorker = ({ item, index }) => {
    return (
      <View>
        <Image source={{ uri: item?.profileImage }} style={{ width: width / 4 - 60, height: width / 4 - 60, borderRadius: (width / 4 - 60) / 2 }} />
        <Image source={getFlag(item?.country)} style={{ width: width / 4 - 60, height: width / 4 - 60, borderRadius: (width / 4 - 60) / 2 }} />
        <Text key={index?.toString()} style={{ color: 'red' }} >{item?.name}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={workersData.default}
        numColumns={4}
        keyExtractor={item => item.id}
        renderItem={renderWorker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});

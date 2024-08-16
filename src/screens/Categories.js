import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as workersData from '../workersData.json'
import { getFlag, getFont, getPersonImage } from '../helpers';
import { AntDesign, Entypo } from '../global/MyIcon';

const categories = [
  {
    id: '1',
    name: "Astrologer",
    image: require('../assets/images/astrologer.jpeg')
  },
  {
    id: '2',
    name: "Assistant",
    image: require('../assets/images/assistant.jpeg')
  },
  {
    id: '3',
    name: "Makeup",
    image: require('../assets/images/makeup.jpeg')
  },
  {
    id: '4',
    name: "Mehndi",
    image: require('../assets/images/mehndi.jpeg')
  },
  {
    id: '5',
    name: "Photographer",
    image: require('../assets/images/photographer.jpeg')
  },
]

export default function Categories() {
  const { height, width } = useWindowDimensions();
  const [originalAllWorkersData, setoriginalAllWorkersData] = useState(workersData.default)
  const [allWorkersData, setAllWorkersData] = useState(workersData.default)
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  // console.log('workersData', workersData);

  useEffect(() => {
    Alert.alert('keyboard will close after every letter you type in textinput due to some incompability')
  }, [])

  const filterDataByCategory = (name) => {
    setSearchText('')
    if (selectedCategory === name) {
      setSelectedCategory('')
      setAllWorkersData([...originalAllWorkersData])
    } else {
      setSelectedCategory(name)
      let allWorkersDataCopy = [...originalAllWorkersData]
      allWorkersDataCopy = allWorkersDataCopy?.filter(work => work?.Worker_Role === name)
      setAllWorkersData([...allWorkersDataCopy])
    }
  }
  const renderCategory = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { filterDataByCategory(item?.name) }} style={[{ marginRight: 10, alignItems: 'center' }, selectedCategory === item?.name ? { borderWidth: 0.5, borderColor: 'blue' } : null]} >
        <Image source={item?.image} style={{ width: width / 4 - 20, height: width / 4 - 20, borderRadius: (width / 4 - 20) / 2 }} />
        <Text style={{ color: 'black', marginTop: 10, fontSize: 12 }} >{item?.name}</Text>
      </TouchableOpacity>
    )
  }
  const renderWorker = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 5 }} >
        <Image source={getFlag(item?.country)} style={[styles.flag, { width: width / 5 - 60, height: width / 5 - 60, borderRadius: (width / 5 - 60) / 2 }]} />
        <View style={{ alignItems: 'center' }} >
          <Image source={getPersonImage(item?.profileImage)} style={{ width: width / 4 - 20, height: width / 4 - 20, borderRadius: (width / 4 - 20) / 2 }} />
          <Text key={index?.toString()} style={{ color: 'black', marginVertical: 10, fontFamily: getFont('Medium') }} >{item?.name}</Text>
        </View>
      </View>
    )
  }
  const SearchBar = () => {
    return (
      <View style={styles.searchBarContainer} >
        <View style={styles.searchBarRow} >
          <AntDesign name='search1' color='grey' size={20} />
          <TextInput
            style={styles.input}
            onChangeText={(txt) => {
              setSelectedCategory('')
              setSearchText(txt)
              if (txt?.trim() !== '') {
                let allWorkersDataCopy = [...allWorkersData]
                allWorkersDataCopy = allWorkersDataCopy?.filter(work => work?.name?.toLowerCase()?.includes(txt?.trim()?.toLowerCase()))
                setAllWorkersData([...allWorkersDataCopy])
              } else {
                setAllWorkersData([...originalAllWorkersData])
              }
            }}
            value={searchText}
            placeholder="Search"
            placeholderTextColor={'grey'}
          />
        </View>
        <TouchableOpacity style={styles.filterContainer}>
          <AntDesign name='filter' color='grey' size={20} />
        </TouchableOpacity>
      </View>
    )
  }
  const Header = () => {
    return (
      <View style={styles.headerContainer} >
        <View style={styles.headerLeftRow} >
          <Entypo name='menu' color='black' size={20} />
          <Text style={styles.headerText} >Velocity Tech</Text>
        </View>
        <AntDesign name='bells' color='black' size={20} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{ backgroundColor: '#e6e3e3', marginBottom: 20, padding: 10 }}
        keyExtractor={item => item.id}
        renderItem={renderCategory}
      />
      <View></View>
      <SearchBar />
      {allWorkersData?.length > 0 ?
        <FlatList
          data={allWorkersData}
          numColumns={4}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          keyExtractor={item => item.id}
          renderItem={renderWorker}
        />
        : <Text style={{ color: 'black', marginVertical: 10, alignSelf: 'center' }} >No workers data</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    // padding: 20
  },
  mainView: {
    padding: 20
  },
  flag: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 100
  },
  searchBarContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e3e3',
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 10,
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e3e3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '15%',
    borderRadius: 10,
    height: 50
  },
  input: {
    height: 50,
    color: 'black',
    fontSize: 20,
    width: '85%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    paddingHorizontal: 20
  },
  headerLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: { color: 'black', marginLeft: 30, fontFamily: getFont('Medium'), fontSize: 16 }
});

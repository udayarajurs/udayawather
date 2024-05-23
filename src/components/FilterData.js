import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import data from './data';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const FilterData = props => {
  const onPressItem = option => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const [searchText, setSearchText] = useState('');

  const [filteredCities, setFilteredCities] = useState(data);

  // Function to filter cities based on search query
  const handleSearch = query => {
    // const filtered = filteredCities.filter(city =>
    //   city.toLowerCase().includes(query.toLowerCase()),
    // );
    // setFilteredCities(filtered);

    if (query === '') {
      // If search query is empty, revert to the original list of cities
      setFilteredCities(data);
    } else {
      // Filter the cities based on the search query
      const filtered = data.filter(city =>
        city.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredCities(filtered);
    }
  };

  // Render item function for FlatList
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.flexDirectionRow}>
        <Text style={styles.TextStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View
          style={[
            styles.modal,
            {
              width: WIDTH * 0.9,
              backgroundColor: '#fff',
            },
          ]}>
          <View style={styles.flexDirectionRow}>
            <Text style={styles.InfoTextStyle}>Select The Cities</Text>
            <TouchableOpacity
              onPress={() => props.changeModalVisibility(false)}
              hitSlop={styles.TouchFunction}
              style={styles.alignSelfCenter}>
              <Text
                style={{marginLeft: 15, color: '#000'}}>{`Close     `}</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 15, marginBottom: 5}}>
            <TextInput
              placeholder="Search"
              value={searchText}
              maxLength={30}
              //  autoFocus={true}
              style={{
                backgroundColor: '#F0F2F5',
                marginStart: 10,
                borderRadius: 6,
                paddingStart: 15,
                paddingVertical: 4,
                marginEnd: 10,
              }}
              onChangeText={data => {
                setSearchText(data);
                handleSearch(data);
              }}
            />
          </View>
          <FlatList
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={{maxHeight: HEIGHT * 0.35}}
            data={filteredCities}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterData;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    borderRadius: 10,
    elevation: 2,
  },
  TouchFunction: {top: 10, bottom: 10, left: 50, right: 50},
  TouchFunctionIcon: {top: 15, bottom: 15},
  flexDirectionRow: {flexDirection: 'row'},
  InfoTextStyle: {
    marginStart: 16,
    marginTop: 10,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    flex: 1,
  },
  alignSelfCenter: {alignSelf: 'center', top: 3},
  marginEnd15: {marginEnd: 15},
  marginBottom15: {marginBottom: 15},
  IconStyle: {marginStart: 20, marginTop: 17},
  TextStyle: {
    marginTop: 17,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    marginStart: 15,
    marginVertical: 5,
    fontSize: 15,
  },
});

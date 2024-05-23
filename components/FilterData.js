import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const FilterData = props => {
  const onPressItem = option => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const cities = [
    'Bangalore',
    'New York',
    'Tokyo',
    'Paris',
    'Sydney',
    'London',
    'Moscow',
    'Beijing',
    'Rio de Janeiro',
    'Cape Town',
  ];

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
            <Text style={styles.InfoTextStyle}>Info</Text>
            <TouchableOpacity
              onPress={() => props.changeModalVisibility(false)}
              hitSlop={styles.TouchFunction}
              style={styles.alignSelfCenter}>
              <Text style={{marginLeft: 15}}>{`Close  `}</Text>
            </TouchableOpacity>
          </View>
          {cities.map((city, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressItem(city)}
              style={styles.flexDirectionRow}>
              <Text style={styles.TextStyle}>{city}</Text>
            </TouchableOpacity>
          ))}
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
    marginStart: 20,
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

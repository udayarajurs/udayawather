import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import ToolBar from '../components/ToolBar';
import MyCard from '../components/MyCard';
import FilterData from '../components/FilterData';
import {Icon} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Bangalore');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'http://api.weatherapi.com/v1/current.json',
          {
            params: {
              key: '591d1044eaf1439f9b294755242305',
              q: selectedCity,
            },
          },
        );
        setWeather(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: {error}</Text>
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  const changeModalVisibility = bool => {
    setIsModalVisible(bool);
  };

  const setData = data => {
    setSelectedCity(data);
    changeModalVisibility(false);
    ToastAndroid.show(`Selected city: ${data}`, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.TollBarStyle}>
        <TouchableOpacity>
          <Icon type="MaterialIcons" name="keyboard-arrow-left" color="#000" />
        </TouchableOpacity>

        <Text style={styles.TollBarName}>Weather App</Text>

        <TouchableOpacity
          onPress={() => {
            changeModalVisibility(true);
          }}>
          <Text style={{color: '#000'}}>search</Text>
        </TouchableOpacity>
      </View>

      <MyCard navigation={navigation} weather={weather} />

      <View>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          onRequestClose={() => changeModalVisibility(false)}>
          <FilterData
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
  TollBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
  },
  TollBarName: {
    marginVertical: 15,
    color: '#000',
  },
});

export default HomeScreen;

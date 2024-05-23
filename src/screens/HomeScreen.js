import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  Image,
} from 'react-native';
import axios from 'axios';
import MyCard from '../components/MyCard';
import FilterData from '../components/FilterData';
import {Icon, Avatar} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Bangalore');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://pet-choice-backend.vercel.app/api/weather/weatherApi?selectedCity=${selectedCity}`,
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

  let iconUrl = weather?.current?.condition?.icon;
  const imageUrl = iconUrl.startsWith('//') ? `https:${iconUrl}` : iconUrl;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.08, backgroundColor: '#fff'}}>
        <View style={styles.TollBarStyle}>
          <Text style={styles.TollBarName}>Wather App</Text>

          <TouchableOpacity
            onPress={() => {
              changeModalVisibility(true);
            }}>
            <Text style={{color: '#000'}}>search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.icon} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 0.92,
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
  icon: {
    width: 125,
    height: 125,
  },
});

export default HomeScreen;

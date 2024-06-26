import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const WeatherDetailScreen = ({route, navigation}) => {
  const {weather} = route.params;

  let iconUrl = weather?.current?.condition?.icon;
  const imageUrl = iconUrl.startsWith('//') ? `https:${iconUrl}` : iconUrl;

  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.icon} />

      <Text style={styles.text}>Location: {weather.location.name}</Text>
      <Text style={styles.text}>Region: {weather.location.region}</Text>
      <Text style={styles.text}>Country: {weather.location.country}</Text>
      <Text style={styles.text}>Temperature: {weather.current.temp_c}°C</Text>
      <Text style={styles.text}>
        Condition: {weather.current.condition.text}
      </Text>
      <Text style={styles.text}>Wind: {weather.current.wind_kph} kph</Text>
      <Text style={styles.text}>Humidity: {weather.current.humidity}%</Text>
      <Text style={styles.text}>
        Feels Like: {weather.current.feelslike_c}°C
      </Text>

      <TouchableOpacity
        style={{borderRadius: 15, backgroundColor: '#00A3FF', marginTop: 30}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text
          style={{
            color: '#fff',
            paddingHorizontal: 55,
            paddingVertical: 5,
            marginVertical: 5,
          }}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000',
  },
  icon: {
    width: 125,
    height: 125,
  },
});

export default WeatherDetailScreen;

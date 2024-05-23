import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const MyCard = ({navigation, weather}) => {
  return (
    <View>
      <View style={{alignSelf: 'center', marginVertical: 25}}>
        <Text style={styles.text}>Location: {weather.location.name}</Text>
        <Text style={styles.text}>Temperature: {weather.current.temp_c}°C</Text>
        <Text style={styles.text}>
          Condition: {weather.current.condition.text}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          backgroundColor: '#00A3FF',
          borderRadius: 15,
        }}
        onPress={() => navigation.navigate('WeatherDetail', {weather})}>
        <Text
          style={{
            color: '#fff',
            paddingVertical: 10,
            paddingHorizontal: 55,
          }}>
          See Full Data
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

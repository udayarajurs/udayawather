import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const ToolBar = () => {
  return (
    <View style={styles.TollBarStyle}>
      <TouchableOpacity>
        <Icon type="MaterialIcons" name="keyboard-arrow-left" color="#000" />
      </TouchableOpacity>

      <Text style={styles.TollBarName}>Wather App</Text>

      <TouchableOpacity
        onPress={() => {
          ToastAndroid.show('Need work on it', ToastAndroid.LONG);
        }}>
        <Text style={{color: '#000'}}>search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
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

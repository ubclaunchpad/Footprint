import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';
export default function HomeScreen(props) {
  const { navigate } = props.navigation;
  return (
    <Button title="Camera" onPress={() => navigate('Camera')} />
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
});
  
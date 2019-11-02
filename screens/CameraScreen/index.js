import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CameraScreen() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Camera Screen</Text>
      </View>
    );
}

CameraScreen.navigationOptions = {
  title: 'Camera',
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
  
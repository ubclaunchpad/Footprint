import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ProductInfoScreen() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Product Info Screen</Text>
      </View>
    );
}

ProductInfoScreen.navigationOptions = {
  title: 'Product Info',
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
  
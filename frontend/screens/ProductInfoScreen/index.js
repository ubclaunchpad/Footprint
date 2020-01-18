import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function ProductInfoScreen(props) {
  const { navigate, getParam } = props.navigation;
  const response = getParam("response", "OOPS");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{response}</Text>
        <Text style={styles.text}>Product Info Screen</Text>
        <Button title="Home" onPress={() => navigate('Home')} />

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
  
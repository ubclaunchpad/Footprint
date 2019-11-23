import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';
import { VictoryLine, VictoryChart } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5fcff",
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


export default function HomeScreen(props) {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <Button title="Camera" onPress={() => navigate('Camera')} />
      <VictoryChart width={350}>
        <VictoryLine data={data}
        alignment = "middle"
        x="quarter" y="earnings" />
      </VictoryChart>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

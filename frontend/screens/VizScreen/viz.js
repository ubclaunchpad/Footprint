import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryLine, VictoryChart } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class Viz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350}>
          <VictoryLine data={data}
          alignment = "middle"
          x="quarter" y="earnings" />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

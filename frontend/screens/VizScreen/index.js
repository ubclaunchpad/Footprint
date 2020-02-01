import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const datas = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    strokeWidth: 2 
  }]
}

const chartConfigu = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2
}

export default class Viz extends React.Component {
  render() {
    return (
      <View>
  <Text>
    Bezier Line Chart
  </Text>
 <LineChart
 data = {datas}
 width = {200}
 length = {200}
 chartConfig = {chartConfigu}/>
  </View>
    )
  }
}

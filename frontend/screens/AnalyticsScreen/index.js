import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, Image} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import Red from '../../assets/red-bg.svg';
import Blue from '../../assets/blue-bg.svg';

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 56,
      backgroundColor: "white",
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    text: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    headerText: {
      fontSize: 18,
      lineHeight: 27,
      fontWeight: '800',
    },
    scrollItem: {
      flex: 1,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    photo: {
      flex: 1,
    },
});


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navigate: props.navigation};
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <View style = {{flex: 4}}>
          <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style = {{flex: 2}}></View>
            <Text style = {{fontSize: 18}}>My Analytics</Text>
            <View style = {{flex: 1}}></View>
            <View style={styles.photo}>
              <Image 
                  source={require('../../assets/profile_photo.png')}  
                  style={{width: 40, height: 40, borderRadius: 20}} />
            </View>
          </View>
          <View style = {{flex: 3}}>
            <Text style = {styles.headerText}>My Footprints</Text>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
              <ScrollView horizontal = {true} contentContainerStyle= {{paddingVertical: 40}} style = {{flex: 1}}>
                <Red style = {styles.scrollItem}></Red>
                <Blue style = {styles.scrollItem}></Blue>
                <Red style = {styles.scrollItem}></Red>
              </ScrollView>
            </View>
          </View>
          <View style = {{flex: 3}}>
            <Text style = {styles.headerText}>My Top 3 Emissions</Text>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
              <ScrollView horizontal = {true} contentContainerStyle= {{paddingVertical: 40}} style = {{flex: 1}}>
                <Red style = {styles.scrollItem}></Red>
                <Blue style = {styles.scrollItem}></Blue>
                <Red style = {styles.scrollItem}></Red>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style = {{flex: 2}}>
          <Text style = {styles.headerText}>Weekly Footprints</Text>
          <LineChart
            data={{
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={screenWidth - 36} // from react-native
            height={220}
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLabels={false}
            onDataPointClick={()=>{console.log('masoud')}}
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(33, 191, 115, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "#21BF73",
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 8
            }}
          />
        </View>
      </View>
    );
  }
}

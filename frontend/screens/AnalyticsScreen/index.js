import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, Image} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import FootprintCard from '../../components/FootprintCard';
import EmissionsCard from '../../components/EmissionsCard';
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
    headerTextWeekly: {
      fontSize: 18,
      lineHeight: 27,
      fontWeight: '800',
      marginBottom: 20,
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
              <ScrollView horizontal = {true} contentContainerStyle= {{marginTop: 40, marginBottom: 20}} style = {{flex: 1}}>
                <View style = {styles.scrollItem}>
                  <FootprintCard amount="4K" timeframe="Today" color="red"></FootprintCard>
                </View>
                <View style = {styles.scrollItem}>
                  <FootprintCard amount="39K"timeframe="This Week" color="blue"></FootprintCard>
                </View>
                <View style = {styles.scrollItem}>
                  <FootprintCard amount="124K" timeframe="This Month" color="red"></FootprintCard>
                </View>
                {/* <View>
                  <Red style = {styles.scrollItem}></Red>
                </View>
                <View>
                  <Red style = {styles.scrollItem}></Red>
                </View>
                <Red style = {styles.scrollItem}></Red>
                <Blue style = {styles.scrollItem}></Blue>
                <Red style = {styles.scrollItem}></Red> */}
              </ScrollView>
            </View>
          </View>
          <View style = {{flex: 3}}>
            <Text style = {styles.headerText}>My Top 3 Emissions</Text>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
              <ScrollView horizontal = {true} contentContainerStyle= {{marginTop: 40, marginBottom: 20}} style = {{flex: 1}}>
                <View style = {styles.scrollItem}>
                  <EmissionsCard percentage="30%" type="Meat" color="red"></EmissionsCard>
                </View>
                <View style = {styles.scrollItem}>
                  <EmissionsCard percentage="15%" type="Dairy" color="blue"></EmissionsCard>
                </View>
                <View style = {styles.scrollItem}>
                  <EmissionsCard percentage="12%" type="Grains" color="red"></EmissionsCard>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style = {{flex: 2}}>
          <Text style = {styles.headerTextWeekly}>Weekly Footprints</Text>
          <LineChart
            data={{
              labels: ["M", "T", "W", "Th", "F", "Sat", "Sun"],
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
            height={180}
            withInnerLines={true}
            withOuterLines={false}
            withVerticalLabels={true}
            withHorizontalLabels={true}
            onDataPointClick={(value) => {
              console.log(value.value.toFixed(2));
              console.log(value.x.toFixed(2), value.y.toFixed(2));
              //something else
            }}
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 0, // optional, defaults to 2dp
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
            }}/>
        </View>
      </View>
    );
  }
}

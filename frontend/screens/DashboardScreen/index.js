import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';
 
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import ProfileCard from '../../components/ProfileCard';
import ChallengeCard from '../../components/ChallengeCard';
import Menu from '../../assets/menu.svg';

 
export default class App extends React.Component {
 
  state = {
    progress: 30,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  }
 
  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }
 
  render() {
    const barWidth = 300;
    const progressCustomStyles = {
      backgroundColor: '#7FCD91',
      height: 20,
    };
 
    return (
      <View style={styles.container}>
        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Menu></Menu>
            <View style = {{flex: 5}}></View>
            <Text style = {{fontSize: 18}}>Dashboard</Text>
            <View style = {{flex: 6}}></View>
          </View>
        <View style={styles.profileWrapper} >
          <ProfileCard />
        </View>
        <View>
          <ProgressBarAnimated
            {...progressCustomStyles}
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#6CC644"
          />
        </View>
        <View style={styles.challenge}>
          <ChallengeCard />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 80,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 15,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 45,
    paddingBottom: 30
  },
  challenge: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    paddingTop: 30
  }
});
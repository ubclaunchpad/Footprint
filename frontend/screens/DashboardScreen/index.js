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
import ProfileCard from '../../components/ProfileCard'
import ChallengeCard from '../../components/ChallengeCard'
 
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
    const barWidth = Dimensions.get('screen').width - 30;
    const progressCustomStyles = {
      backgroundColor: '#7FCD91',
      height: 20,
    };
 
    return (
      <View style={styles.container}>
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
    paddingTop: 96,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 15,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  challenge: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    paddingLeft: 20,
    paddingTop: 30
  }
});
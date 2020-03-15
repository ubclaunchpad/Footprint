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
      backgroundColor: '#7FCD91'
    };
 
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Dashboard</Text>
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
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    alignContent: 'center',
  },
  buttonContainer: {
    marginTop: 15,
  },
  heading: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    color: '#555555',
  }, 
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
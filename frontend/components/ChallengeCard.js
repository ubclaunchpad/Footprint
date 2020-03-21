import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.photo}>
                    <Image 
                        source={require('../assets/salad_bowl.png')}  
                        style={{width: 300, height: 150}} 
                    />
                </View>
                <View style={styles.description}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Image 
                            source={require('../assets/salad.png')}  
                            style={{width: 70, height: 70, marginLeft: 15, resizeMode: 'stretch'}} 
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.level}>Meatless Monday</Text>
                        <Text style={styles.text}>Earn a new badge (and 50 points) when you enjoy three meatless meals</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: 280,
        backgroundColor: 'white'
    },
    photo: {
        flex: 1,
    },
    textContainer: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        color: '#555555',
        fontSize: 16,
    },
    level: {
        color: '#555555',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    description: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    }
  });
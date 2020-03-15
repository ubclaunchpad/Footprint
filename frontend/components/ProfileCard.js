import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Red from '../assets/red-bg.svg';
import Blue from '../assets/blue-bg.svg';

/* The FoodComponentCard class is a custom view that displays what 
 * is in the food item a user has scanned. 
 * Props: type - the type of food ("meat", "dairy", "fish", "veg", "fruit", or "grains")
 *        icon - the icon representing the type of food as an svg
 * 
 * State: count - the # of times an item belonging to one type appeared
 *                  in what the user scanned
 */
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
                        source={require('../assets/profile_photo.png')}  
                        style={{width: 96.94, height: 96.94, borderRadius: 48.47}} 
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>JOHN D.</Text>
                    <Text style={styles.level}>Lv. 8</Text>
                    <Text style={styles.text}>ECO-USER</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%'
    },
    photo: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        color: '#555555'
    },
    level: {
        fontWeight: 'bold'
    }
  });
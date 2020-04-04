import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Red from '../assets/red-bg.svg';
import Blue from '../assets/blue-bg.svg';

/* The EmissionsCard class is a custom view that displays
 * the percentage of a user's carbon footprint that comes from one food type 
 * Props: type - the type of food ("meat", "dairy", "fish", "veg", "fruit", or "grains")
 *        percentage - the percentage of emissions coming from the food group
 * 
 * State: count - the # of times an item belonging to one type appeared
 *                  in what the user scanned
 */
export default class FootprintCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }
    
    render() {
        const redBackground = <Red style={styles.background} />
        const blueBackground = <Blue style={styles.background} />
        return (
            <View style = {{flex: 1}}>
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{alignItems: 'center'}}>
                        {this.props.color === 'red' ? redBackground : blueBackground}
                    </View>
                </View>
                <View style = {{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', marginBottom: 25}}>
                    <Text style={styles.percentage}>
                        {this.props.percentage}
                    </Text>
                    <Text style={styles.type}>
                        {this.props.type}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    percentage: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    type: {
        fontSize: 13,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    background: {
        width: '100%',
        height: '100%',
    },
  });
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Red from '../assets/red-bg.svg';
import Blue from '../assets/blue-bg.svg';

/* The FootprintCard class is a custom view that displays 
 * the carbon footprint over a past period of time. 
 * Props: timeframe - the timeframe being considered ("Today", "This Week", "This Month")
 *        amount - the amount of **INSERT UNITS HERE** of a carbon footprint
 * 
 * State:
 * 
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
                    <Text style={styles.amount}>
                        {this.props.amount}
                    </Text>
                    <Text style={styles.timeframe}>
                        {this.props.timeframe}
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
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    timeframe: {
        fontSize: 13,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    background: {
        width: '100%',
        height: '100%',
    },
});
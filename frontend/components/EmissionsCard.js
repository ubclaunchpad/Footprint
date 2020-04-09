import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Red from '../assets/red-bg.svg';
import Blue from '../assets/blue-bg.svg';
import Meat from '../assets/meat-icon.svg';
import Dairy from '../assets/dairy-icon.svg';
import Toast from '../assets/toast-icon.svg';

/* The EmissionsCard class is a custom view that displays
 * the percentage of a user's carbon footprint that comes from one food type 
 * Props: type - the type of food ("Meat", "Dairy", "Fish", "Veg", "Fruit", or "Grains")
 *        percentage - the percentage of emissions coming from the food group
 * 
 * TODO: Add icon support for Dairy, Fish, Veg, and Fruit
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

    iconSelector(foodType) {
        switch (foodType) {
            case 'Meat':
                return <Meat></Meat>;

            case 'Dairy':
                return <Dairy></Dairy>;

            case 'Grains':
                return <Toast></Toast>;

            default:
                break;
        }
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
                <View style = {{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', marginBottom: 25, flexDirection: 'row'}}>
                    <View style = {{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                        {this.iconSelector(this.props.type)}
                    </View>
                    <View style = {{flex: 2}}>
                        <Text style={styles.type}>
                            {this.props.type}
                        </Text>
                        <Text style={styles.percentage}>
                            {this.props.percentage}
                        </Text>
                    </View>
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
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
export default class FoodComponentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: "0"
        };
      }
    
    render() {
        const redBackground = <Red style={styles.background} />
        const blueBackground = <Blue style={styles.background} />
        return (
            <View style = {{width: '100%', height: '100%'}}>
                <View style = {{position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{width: '85%', height: '85%', alignItems: 'center'}}>
                        {this.props.color === 'red' ? redBackground : blueBackground}
                    </View>
                </View>
                <View style = {{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', flexDirection: 'row'}}>
                    <View style = {{flex: 1}}>
                    </View>
                    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View style = {{flex: 5, justifyContent: 'flex-end'}}>
                            <Text style={styles.count}>
                                {this.state.count}
                            </Text>
                        </View>
                        <View style = {{flex: 6, justifyContent: 'flex-start', paddingTop: 5}}>
                            <Text style={styles.type}>
                                {this.props.type}
                            </Text>
                        </View>
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
    count: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    type: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    background: {
        width: '100%',
        height: '100%',
    },
  });
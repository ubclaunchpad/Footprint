import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import FoodComponentCard from '../../components/FoodComponentCard';

export default function ProductInfoScreen(props) {
  //const { navigate, getParam } = props.navigation;
  //const response = getParam("response", "OOPS");
  const total = 'Total\nCO2\nFootprint:';
  const units = 'kg CO2';
  const magnitude = 22;
  return (
    <View style={styles.container}>
      <View style={[styles.elementsContainer]}>
        <View style={{flex: 6, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <View style = {{flex: 1}}>
              <FoodComponentCard type='Dairy' color = 'red'/>
            </View>  
            <View style = {{flex: 1}}>
              <FoodComponentCard type='Meat' color = 'red'/>
            </View>
            <View style = {{flex: 1}}>
              <FoodComponentCard type='Fish' color = 'red'/>
            </View>
          </View>
          <View style={{flex: 3}}>
            <View style = {{flex: 1}}>
              <FoodComponentCard type='Grains' color = 'blue'/>
            </View>
            <View style = {{flex: 1}}>
              <FoodComponentCard type='Fruit' color = 'blue'/>
            </View>
            <View style = {{flex: 1}}>
              <FoodComponentCard type='Veg' color = 'blue'/>
            </View>
          </View>
        </View>
        <View style={{flex: 4}}>
          <View style = {{flex: 3, flexDirection: 'row'}}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 10, paddingRight: 5}}>
              <Text style ={styles.textTotal}>
                {total}
              </Text>
            </View>
            <View style = {{flex: 1}}>
              <View style = {{flex: 1, justifyContent: 'flex-end', paddingLeft: 15}}>
                <Text style ={styles.magnitude}>
                  {magnitude}
                </Text>
              </View>
              <View style = {{flex: 1, paddingLeft: 15, paddingTop: 10}}>
                <Text style ={styles.units}>
                  {units}
                </Text>
              </View>
            </View>
          </View>  
          <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            <Button title = 'Nihao' color = '#FF9786'/>
            <Button title = 'Hello' color = '#FF9786'/>
          </View>
        </View>
      </View>
    </View>
  );
}

ProductInfoScreen.navigationOptions = {
  title: 'Footprint Components',
};

const styles = {
  textTotal: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  magnitude: {
    fontSize: 52,
    fontWeight: 'bold',
  },
  units: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
}
  
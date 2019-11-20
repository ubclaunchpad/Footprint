import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen/index';
import CameraScreen from '../screens/CameraScreen/index';
import ProductInfoScreen from '../screens/ProductInfoScreen/index';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-stats${focused ? '' : '-outline'}`
          : 'md-stats'
      }
    />
  ),
};

HomeStack.path = '';

const CameraStack = createStackNavigator(
  {
    Camera: CameraScreen,
  },
  config
);

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-expand'} />
  ),
};

CameraStack.path = '';

const ProductInfoStack = createStackNavigator(
  {
    ProductInfo: ProductInfoScreen,
  },
  config
);

ProductInfoStack.navigationOptions = {
  tabBarLabel: 'Product Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-leaf' : 'md-leaf'} />
  ),
};

ProductInfoStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CameraStack,
  ProductInfoStack,
});

tabNavigator.path = '';

export default tabNavigator;
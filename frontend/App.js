import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import DashboardScreen from "./screens/DashboardScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import CameraScreen from "./screens/CameraScreen";
import ProductInfoScreen from './screens/ProductInfoScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppStack = createBottomTabNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name='user' color={tintColor} size={32} />
        )
    })
  },
  Analytics: { 
    screen: AnalyticsScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name='bar-chart-o' color={tintColor} size={32} />
      )
    }) 
  },
  Camera: { 
    screen: CameraScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name='camera' color={tintColor} size={26} />
      )
    }) 
  },
  ProductInfoScreen: {
    screen: ProductInfoScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name='trophy' color={tintColor} size={32} />
      )
    }) 
  }
}, 
{
  tabBarOptions: {
    activeTintColor: '#7FCD91', // active icon color
    inactiveTintColor: '#AAAAAA',  // inactive icon color
    style: {
      height: 64, // TabBar background
      paddingTop: 5,
      paddingBottom: 5
  }
  }
});

// We can easily add a loading screen and registration screen
// if we wanted to change the navigation flow later by adding
// more screens and stack navigators. We use a SwitchNavigator
// to prevent the user from being able to swipe back or use
// the Android back button to go back to the login screen
// once they are signed in, i.e. avoid the problem of a top-level
// StackNavigator
const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  App: AppStack
});

const App = createAppContainer(MainNavigator);

export default App;

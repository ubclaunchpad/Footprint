import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AnalyticsScreen from './screens/AnalyticsScreen';
import CameraScreen from './screens/CameraScreen';
import ProductInfoScreen from './screens/ProductInfoScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppStack = createStackNavigator({
  Analytics: { screen: AnalyticsScreen },
  Camera: { screen: CameraScreen },
  ProductInfo: {screen: ProductInfoScreen }
});

// We can easily add a loading screen and registration screen
// if we wanted to change the navigation flow later by adding
// more screens and stack navigators
const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  App: AppStack
});

const App = createAppContainer(MainNavigator);

export default App;

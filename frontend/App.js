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

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  App: AppStack
});

const App = createAppContainer(MainNavigator);

export default App;

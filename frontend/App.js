import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AnalyticsScreen from './screens/AnalyticsScreen';
import CameraScreen from './screens/CameraScreen';
import ProductInfoScreen from './screens/ProductInfoScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Analytics: { screen: AnalyticsScreen },
  Camera: { screen: CameraScreen },
  ProductInfo: {screen: ProductInfoScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

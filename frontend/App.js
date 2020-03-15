import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardScreen from "./screens/DashboardScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import CameraScreen from "./screens/CameraScreen";
import ProductInfoScreen from './screens/ProductInfoScreen';
const MainNavigator = createStackNavigator({
  DashboardScreen: { screen: DashboardScreen },
  Analytics: { screen: AnalyticsScreen },
  Camera: { screen: CameraScreen },
  ProductInfo: {screen: ProductInfoScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import ProductInfoScreen from './screens/ProductInfoScreen';
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen },
  ProductInfo: {screen: ProductInfoScreen}
});


const App = createAppContainer(MainNavigator);

export default App;

import { NavigationContainer } from '@react-navigation/native';
import './global.css';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './src/pages/Splash/Splash';
import { Login } from './src/pages/Login/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen component={Splash} name="Splash" options={{headerShown:false}} />
      <Stack.Screen component={Login} name="Login" options={{headerShown:false}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

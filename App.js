import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Beranda from './beranda';
import Detail from './detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="detail"
        component={Detail}
      />
      <Stack.Screen
        name="beranda"
        component={Beranda}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
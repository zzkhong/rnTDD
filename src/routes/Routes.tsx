import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screen/Home/HomeScreen';

const Stack = createStackNavigator<RouteTypeList>();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* Just for testing purpose, we will be using same
      screen component with different route name */}
      <Stack.Screen name="Details" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;

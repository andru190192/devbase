import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {Person} from '../screens/Person';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Person" component={Person} />
    </Stack.Navigator>
  );
};

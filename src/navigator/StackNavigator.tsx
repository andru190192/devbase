import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home as HomeScreen} from '../screens/Home';
import {Person as PersonScreen} from '../screens/Person';

export enum Screens {
  Home = 'Home',
  Person = 'Person',
}

export type RootStackParams = {
  Home: undefined;
  Person: {userId: string};
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'papayawhip',
        },
        presentation: 'card',
      }}>
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
      <Stack.Screen name={Screens.Person} component={PersonScreen} />
    </Stack.Navigator>
  );
};

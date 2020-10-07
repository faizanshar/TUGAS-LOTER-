import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import login from './Login';
import register from './Register';

const Stack = createStackNavigator();
const Indux = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="register"
          component={register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Indux;



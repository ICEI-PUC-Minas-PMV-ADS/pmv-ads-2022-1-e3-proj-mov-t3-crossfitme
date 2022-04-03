import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from './Navigation';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Navigation' component={Navigation} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;

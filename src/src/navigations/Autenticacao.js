import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from '../components/Navigation';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Stack = createNativeStackNavigator();

const Autenticacao = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                title: 'CrossFitMe',
                statusBarStyle: 'auto',
                statusBarHidden: true,
                headerStyle: {backgroundColor: '#000'},
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24,
                },
                headerBackVisible: false,
            }}
        >
            <Stack.Group>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='Cadastro'
                    component={Cadastro}
                    options={{headerShown: false}}
                />
                <Stack.Screen name='Navigation' component={Navigation} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default Autenticacao;

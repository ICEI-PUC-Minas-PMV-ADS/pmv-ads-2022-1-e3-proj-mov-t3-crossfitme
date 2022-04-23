import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from '../components/Navigation';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroAula from '../pages/CadastroAula';
import Aulas from '../pages/Aulas';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName=''
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
                <Stack.Screen name='CadastroAula' component={CadastroAula} />
                <Stack.Screen name='Navigation' component={Navigation} />
                <Stack.Screen name='Aulas' component={Aulas} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroAula from '../pages/CadastroAula';
import Aulas from '../pages/Aulas';
import Avaliacoes from '../pages/Avaliacoes';
import CadastroAvaliacao from '../pages/CadastroAvaliacao';
import RelatorioAvaliacao from '../pages/RelatorioAvaliacao';

const Stack = createNativeStackNavigator();

const Autenticacao = () => {
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
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default Autenticacao;

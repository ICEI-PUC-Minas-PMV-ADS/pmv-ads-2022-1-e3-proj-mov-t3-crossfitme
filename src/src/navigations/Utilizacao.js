import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Perfil from '../pages/Perfil';
import Aulas from '../pages/Aulas';
import Avaliacao from '../pages/Avaliacoes';
import Home from '../pages/Home';
import CadastroAvaliacao from '../pages/CadastroAvaliacao';
import RelatorioAvaliacao from '../pages/RelatorioAvaliacao';
import CadastroAula from '../pages/CadastroAula';
import AulaDetalhe from '../pages/AulaDetalhe';

const Stack = createNativeStackNavigator();

const Utilizacao = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
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
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Perfil' component={Perfil} />
            <Stack.Screen name='Aulas' component={Aulas} />
            <Stack.Screen name='Avaliacao' component={Avaliacao} />
            <Stack.Screen
                name='CadastroAvaliacao'
                component={CadastroAvaliacao}
            />
            <Stack.Screen
                name='RelatorioAvaliacao'
                component={RelatorioAvaliacao}
            />
            <Stack.Screen name='CadastroAula' component={CadastroAula} />
            <Stack.Screen name='AulaDetalhe' component={AulaDetalhe} />
        </Stack.Navigator>
    );
};

export default Utilizacao;

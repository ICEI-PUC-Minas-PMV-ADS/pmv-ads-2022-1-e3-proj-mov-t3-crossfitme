import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Perfil from '../pages/Perfil';
import Aulas from '../pages/Aulas';
import Avaliacao from '../pages/Avaliacoes';
import Home from '../pages/Home';

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
             <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{headerShown: false}}
                />
            
                <Stack.Screen
                    name='Perfil'
                    component={Perfil}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='Aulas'
                    component={Aulas}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                name='Avaliacao' 
                component={Avaliacao} />


          
        </Stack.Navigator>
    );
};

export default Utilizacao;

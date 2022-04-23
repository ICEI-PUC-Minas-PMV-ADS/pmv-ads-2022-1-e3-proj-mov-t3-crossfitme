import React from 'react';
import AppTheme from './src/components/AppTheme';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Rotas from './src/navigations/Rotas';

const App = () => {

    return (
        <AppTheme>
            <UserProvider>
                <NavigationContainer>
                    <Rotas />
                </NavigationContainer>
            </UserProvider>
        </AppTheme>
    );

};

export default App;

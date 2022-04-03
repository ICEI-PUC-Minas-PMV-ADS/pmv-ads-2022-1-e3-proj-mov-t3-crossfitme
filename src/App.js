import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import AppTheme from './src/components/AppTheme';
import {NavigationContainer} from '@react-navigation/native';

import Header from './src/components/Header';
import StackNavigator from './src/components/StackNavigator';

const App = () => {
    return (
        <AppTheme>
            <NavigationContainer>
                <StatusBar style='light' />
                <Header title={'CrossFitMe'} />
                <StackNavigator />
            </NavigationContainer>
        </AppTheme>
    );
};

export default App;

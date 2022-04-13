import * as React from 'react';
import AppTheme from './src/components/AppTheme';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigations/StackNavigator';

const App = () => {
    const login = true;
    if (login) {
        return (
            <AppTheme>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </AppTheme>
        );
    }
};

export default App;

import * as React from 'react';
import {
    configureFonts,
    DefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

const fontConfig = {
    web: {
        medium: {
            fontFamily: 'Poppins-SemiBold',
            fontWeight: 'normal',
        },
    },
    ios: {
        medium: {
            fontFamily: 'Poppins-SemiBold',
            fontWeight: 'normal',
        },
    },
    android: {
        medium: {
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
        },
    },
};

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
};

const AppTheme = (props) => {
    let [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return <PaperProvider theme={theme}>{props.children}</PaperProvider>;
};

export default AppTheme;

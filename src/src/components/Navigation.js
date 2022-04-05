import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import Aulas from '../pages/Aulas.js';
import Perfil from '../pages/Perfil.js';
import Avaliacao from '../pages/Avaliacao.js';

const Navigation = () => {
    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
        {
            key: 'aulas',
            title: 'Aulas',
            icon: 'calendar-month',
        },
        {
            key: 'perfil',
            title: 'Perfil',
            icon: 'account-circle',
        },
        {
            key: 'avaliacao',
            title: 'Avaliações',
            icon: 'chart-timeline-variant',
        },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        aulas: Aulas,
        perfil: Perfil,
        avaliacao: Avaliacao,
    });

    return (
        <BottomNavigation
            barStyle={styles.navigation}
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            style={styles.navigation}
        />
    );
};

export default Navigation;

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: '#000000',
    },
});

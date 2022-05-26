import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Perfil from './Perfil';
import Aulas from './Aulas';
import Avaliacao from './Avaliacoes';

const Home = () => {
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

export default Home;

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: '#000000',
    },
});

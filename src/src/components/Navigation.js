import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import Schedule from '../pages/Schedule.js';
import Profile from '../pages/Profile.js';
import Evaluation from '../pages/Evaluation.js';

const Navigation = () => {
    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
        {
            key: 'schedule',
            title: 'Aulas',
            icon: 'calendar-month',
        },
        {
            key: 'profile',
            title: 'Perfil',
            icon: 'account-circle',
        },
        {
            key: 'evaluation',
            title: 'Avaliações',
            icon: 'chart-timeline-variant',
        },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        schedule: Schedule,
        profile: Profile,
        evaluation: Evaluation,
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

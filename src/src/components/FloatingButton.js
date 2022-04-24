import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

const FloatingButton = (props) => (
    <FAB style={styles.fab} icon='plus' onPress={props.onPress} />
);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 15,
        right: -10,
        bottom: 0,
        backgroundColor: '#000',
    },
});

export default FloatingButton;

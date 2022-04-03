import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});

const Container = (props) => {
    return <View style={styles.container}>{props.children}</View>;
};

export default Container;

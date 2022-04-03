import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header = (props) => {
    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Content
                title={props.title}
                titleStyle={{fontSize: 24}}
            ></Appbar.Content>
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000000',
        marginLeft: 20,
    },
});

export default Header;

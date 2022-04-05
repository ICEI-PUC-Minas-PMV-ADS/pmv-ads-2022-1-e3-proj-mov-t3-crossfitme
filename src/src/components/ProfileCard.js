import {Avatar, Card} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const ProfileCard = (props) => (
    <Card style={styles.card}>
        <Card.Title
            titleStyle={styles.cardTitle}
            title={'Olá, ' + props.name}
            left={() => (
                <Avatar.Image
                    style={{marginLeft: 20, marginRight: 20}}
                    size={70}
                    source={props.source}
                />
            )}
        />
    </Card>
);

export default ProfileCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },
    cardTitle: {
        alignSelf: 'center',
        fontSize: 24,
    },
});

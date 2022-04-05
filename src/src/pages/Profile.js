import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Container from '../components/Container';
import ProfileImage from '../components/ProfileImage';

const texts = {Idade: 30, Altura: '1,80', Peso: 80};

const Profile = () => {
    return (
        <Container>
            <View style={styles.profileContainer}>
                <ProfileImage
                    source={require('../../assets/img/profile.jpg')}
                />
            </View>
            <View style={styles.profileContainer}>
                <View>
                    <View style={{marginBottom: 15}}>
                        <Text style={styles.textTitle}>Nome</Text>
                        <Text style={styles.textDescription}>Bruno Souza</Text>
                    </View>
                    <View style={{...styles.textContainer, marginBottom: 15}}>
                        {Object.keys(texts).map((key) => {
                            return (
                                <View key={key}>
                                    <Text style={styles.textTitle}>{key}</Text>
                                    <Text style={styles.textDescription}>
                                        {texts[key]}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View>
                    <Text style={styles.textTitle}>Membro desde</Text>
                    <Text style={styles.textDescription}>14/01/2022</Text>
                </View>
            </View>
        </Container>
    );
};

export default Profile;

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    textTitle: {
        fontSize: 20,
        color: '#666666',
        textAlign: 'center',
    },
    textDescription: {
        fontSize: 35,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
});

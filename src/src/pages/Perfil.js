import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Container from '../components/Container';
import ProfileImage from '../components/ProfileImage';
import {useUser} from '../contexts/UserContext';

const Perfil = () => {
    const {name} = useUser();
    const {mail} = useUser();
    const {endereco} = useUser();
    const {nascimento} = useUser();
    const {desde} = useUser();
    const {setSigned} = useUser();

    return (
        <Container>
            <View style={styles.topContainer}>
                <Text style={styles.textDescription}> {name} </Text>
                <Button
                    onPress={() => {
                        {
                            setSigned(false);
                        }
                    }}
                    dark={true}
                    style={styles.button}
                    color='gray'
                >
                    sair{' '}
                </Button>
            </View>

            <View style={styles.profileContainer}>
                <ProfileImage
                    source={require('../../assets/img/profile.jpg')}
                />
            </View>

            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.textTitle}>E-mail: </Text>
                    <Text style={styles.textDescription}> {mail} </Text>
                    <Text style={styles.textTitle}>Data de Nascimento: </Text>
                    <Text style={styles.textDescription}> {nascimento} </Text>
                    <Text style={styles.textTitle}>Endereço: </Text>
                    <Text style={styles.textDescription}> {endereco} </Text>
                    <Text style={styles.textTitle}>Membro desde:</Text>
                    <Text style={styles.textDescription}>{desde}</Text>
                </View>
            </View>
        </Container>
    );
};

export default Perfil;

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        margin: 8,
    },
    textTitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
    },
    textDescription: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
    button: {
        alignSelf: 'center',
    },
});

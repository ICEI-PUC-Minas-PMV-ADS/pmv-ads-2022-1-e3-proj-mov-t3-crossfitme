import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Container from '../components/Container';
import ProfileImage from '../components/ProfileImage';
import { useUser } from '../contexts/UserContext';
import Button_ from '../components/Button_';

const texts = { Idade: 30, Altura: '1,80', Peso: 80 };

const Perfil = () => {

    const { name } = useUser();
    const { setSigned } = useUser();

    return (
        <Container>
            <View style={styles.profileContainer}>
                <ProfileImage
                    source={require('../../assets/img/profile.jpg')}
                />
            </View>
            <Button onPress={() => {{setSigned(false)}}} icon = {'exit-to-app'} dark={true}  mode="contained"> sair </Button>

            <View style={styles.profileContainer}>
                <View>
                   
                        <Text style={styles.textDescription}> {name} </Text>
            


                    <View style={{ ...styles.textContainer, marginBottom: 10 }}>
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

export default Perfil;

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

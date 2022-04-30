import {View, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import ListaAlunos from '../components/ListaAlunos';
import Button_ from '../components/Button_';
import {useNavigation} from '@react-navigation/native';

const AulaDetalhe = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Title
                        titleStyle={styles.cardTitle}
                        title={'Alunos confirmados'}
                    />
                </Card>
            </View>
            <View
                style={{
                    marginBottom: 30,
                }}
            >
                <ListaAlunos />
            </View>
            <View style={{alignItems: 'center'}}>
                <Button_ onPress={() => navigation.goBack()}>Voltar</Button_>
            </View>
        </View>
    );
};

export default AulaDetalhe;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15,
        flex: 1,
    },
    cardContainer: {marginTop: 15, marginBottom: 30},
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

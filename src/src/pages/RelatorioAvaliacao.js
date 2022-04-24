import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import FloatingIcon from '../components/FloatingIcon';
import EvaluationCard from '../components/EvaluationCard';
import Button_ from '../components/Button_';
import {useNavigation} from '@react-navigation/native';

const Avaliacao = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Title
                        titleStyle={styles.cardTitle}
                        title={'Bruno Souza'}
                    />
                </Card>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30,
                }}
            >
                <FloatingIcon name={'file-document-outline'} />
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 22}}>
                    Relatório de Avaliação Física
                </Text>
            </View>
            <View
                style={{
                    marginBottom: 30,
                }}
            >
                <EvaluationCard />
            </View>
            <View style={{alignItems: 'center'}}>
                <Button_ onPress={() => navigation.goBack()}>Voltar</Button_>
            </View>
        </View>
    );
};

export default Avaliacao;

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

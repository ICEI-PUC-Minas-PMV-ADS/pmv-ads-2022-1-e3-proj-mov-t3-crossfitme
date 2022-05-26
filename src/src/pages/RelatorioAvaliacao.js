import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import FloatingIcon from '../components/FloatingIcon';
import EvaluationCard from '../components/EvaluationCard';
import Button_ from '../components/Button_';
import {useNavigation} from '@react-navigation/native';
import {deleteRelatorio} from '../services/relatoriofisico.service';
import {useUser} from '../contexts/UserContext';
import ProfileCard from '../components/ProfileCard';

const RelatorioAvaliacao = ({route}) => {
    const {item} = route.params;
    const {name} = useUser();
    const {rule} = useUser();

    const handleExcluir = () => {
        deleteRelatorio(item.id).then((res) => {
            navigation.goBack();
        });
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {rule == 'admin' ? (
                <View style={styles.cardContainer}>
                    <Card style={styles.card}>
                        <Card.Title
                            titleStyle={styles.cardTitle}
                            title={item.name}
                        />
                    </Card>
                </View>
            ) : (
                <View style={{marginBottom: 30}}>
                    <ProfileCard
                        name={name}
                        source={require('../../assets/img/profile.jpg')}
                    />
                </View>
            )}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignitem: 'center',
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
                <EvaluationCard data={item} />
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Button_ onPress={() => navigation.goBack()}>Voltar</Button_>

                {rule == 'aluno' ? null : (
                    <Button_ onPress={handleExcluir}>Excluir</Button_>
                )}
            </View>
        </View>
    );
};

export default RelatorioAvaliacao;

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

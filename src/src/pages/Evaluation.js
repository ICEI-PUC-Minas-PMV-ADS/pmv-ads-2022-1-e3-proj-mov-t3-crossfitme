import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FloatingIcon from '../components/FloatingIcon';
import ProfileCard from '../components/ProfileCard';
import EvaluationCard from '../components/EvaluationCard';

const Evaluation = () => {
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 15}}>
                <ProfileCard
                    name={'Bruno Souza'}
                    source={require('../../assets/img/profile.jpg')}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 15,
                }}
            >
                <FloatingIcon name={'file-document-outline'} />
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 22}}>
                    Relatório de Avaliação Física
                </Text>
            </View>
            <View>
                <EvaluationCard />
            </View>
        </View>
    );
};

export default Evaluation;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15,
    },
});

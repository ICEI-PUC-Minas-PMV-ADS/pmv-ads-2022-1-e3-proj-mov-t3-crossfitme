import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import ProfileCard from '../components/ProfileCard';
import FloatingIcon from '../components/FloatingIcon';
import ClassCard from '../components/ClassCard';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15,
    },
});

const Schedule = () => {
    return (
        <ScrollView>
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
                    <FloatingIcon name={'map-marker-outline'} />
                    <Text
                        style={{fontFamily: 'Poppins-SemiBold', fontSize: 22}}
                    >
                        Academia Fitness
                    </Text>
                </View>
                <View>
                    <ClassCard qtd={'8/10'} time={'13:30'}>
                        Aula funcional com o professor Rodrigo Silva.
                    </ClassCard>
                    <ClassCard qtd={'10/10'} time={'16:30'}>
                        Aula funcional com a professora Carolina Duarte. 30
                        minutos de exercícios indoor e 30 minutos de corrida ao
                        ar livre.
                    </ClassCard>
                    <ClassCard qtd={'5/10'} time={'18:30'}>
                        Aula funcional com a professora Ricardo Andrade.
                        Empurrar pneus de caminhão e escalada na corda.
                    </ClassCard>
                    <ClassCard qtd={'0/10'} time={'20:30'}>
                        Aula funcional com a professora Rodrigo Silva.
                        Levantamento de peso.
                    </ClassCard>
                </View>
            </View>
        </ScrollView>
    );
};

export default Schedule;

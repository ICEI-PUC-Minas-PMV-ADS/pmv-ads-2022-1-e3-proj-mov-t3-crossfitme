import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import ProfileCard from '../components/ProfileCard';
import FloatingIcon from '../components/FloatingIcon';
import ClassCard from '../components/ClassCard';

const DATA = [
    {
        id: 1,
        qtd: '8/10',
        time: '13:30',
        description: 'Aula funcional com o professor Rodrigo Silva.',
    },
    {
        id: 2,
        qtd: '10/10',
        time: '16:30',
        description:
            'Aula funcional com a professora Carolina Duarte. 30 minutos de exercícios indoor e 30 minutos de corrida ao ar livre.',
    },
    {
        id: 3,
        qtd: '5/10',
        time: '18:30',
        description:
            'Aula funcional com a professora Ricardo Andrade. Empurrar pneus de caminhão e escalada na corda.',
    },
    {
        id: 4,
        qtd: '0/10',
        time: '20:30',
        description:
            'Aula funcional com a professora Rodrigo Silva. Levantamento de peso.',
    },
];

const renderItem = ({item}) => (
    <ClassCard qtd={item.qtd} time={item.time}>
        {item.description}
    </ClassCard>
);

const Aulas = () => {
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
                <FloatingIcon name={'map-marker-outline'} />
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 22}}>
                    Academia Fitness
                </Text>
            </View>
            <View style={styles.flatList}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Aulas;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15,
        flexGrow: 1,
        flex: 1,
    },
    flatList: {
        flexGrow: 1,
        flex: 1,
    },
});

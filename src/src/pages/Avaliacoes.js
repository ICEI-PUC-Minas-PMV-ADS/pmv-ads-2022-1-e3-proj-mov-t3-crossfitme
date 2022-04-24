import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-paper';

import ProfileCard from '../components/ProfileCard';
import FloatingIcon from '../components/FloatingIcon';
import AvaliacaoCard from '../components/AvaliacaoCard';
import FloatingButton from '../components/FloatingButton';

import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

import {getAulas} from '../services/CrossFitMeServicesDB';

const Aulas = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [aula, setAula] = useState([]);

    useEffect(() => {
        getAulas().then((dados) => {
            setAula(dados);
        });
    }, [isFocused]);

    const renderItem = ({item}) => (
        <AvaliacaoCard qtd={'/' + item.qtd} time={item.hora}>
            {item.descricao}
        </AvaliacaoCard>
    );
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 30}}>
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
                    marginBottom: 30,
                }}
            >
                <FloatingIcon name={'file-document-outline'} />
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 22}}>
                    Avaliações Físicas
                </Text>
            </View>
            <View style={styles.flatList}>
                <FlatList
                    data={aula}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <FloatingButton
                onPress={() => navigation.navigate('CadastroAvaliacao')}
            />
        </View>
    );
};

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
export default Aulas;

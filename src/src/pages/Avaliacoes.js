import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {Text} from 'react-native-paper';

import ProfileCard from '../components/ProfileCard';
import FloatingIcon from '../components/FloatingIcon';
import AvaliacaoCard from '../components/AvaliacaoCard';
import FloatingButton from '../components/FloatingButton';

import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

import {
    GetRelatorios,
    GetRelatoriosAluno,
} from '../services/relatoriofisico.service';

import {useUser} from '../contexts/UserContext';

const Avaliacoes = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const {rule} = useUser();
    const {name} = useUser();
    const {id} = useUser();

    const [relatorio, setRelatorios] = useState([]);

    useEffect(() => {
        {
            rule == 'admin'
                ? GetRelatorios().then((dados) => {
                      setRelatorios(dados);
                  })
                : GetRelatoriosAluno(id).then((dados) => {
                      setRelatorios(dados);
                  });
        }
    }, [isFocused]);

    const renderItem = ({item}) => (
        <AvaliacaoCard
            data={item.data}
            nome={item.name}
            onPress={() =>
                navigation.navigate('RelatorioAvaliacao', {item: item})
            }
        />
    );

    return (
        <View style={styles.container}>
            {/* <SafeAreaView>
                <ScrollView > */}
            <View style={{marginBottom: 30}}>
                <ProfileCard
                    name={name}
                    source={require('../../assets/img/profile.jpg')}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <FloatingIcon name={'file-document-outline'} />
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 22}}>
                    Avaliações Físicas
                </Text>
            </View>
            <View style={styles.flatList}>
                <FlatList
                    data={relatorio}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    // showsVerticalScrollIndicator={false}
                />
            </View>

            {/* </ScrollView>
            </SafeAreaView> */}

            {rule == 'aluno' ? null : (
                <FloatingButton
                    onPress={() => navigation.navigate('CadastroAvaliacao')}
                />
            )}
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
export default Avaliacoes;

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';
import {
    AgendarAlunoNaAula,
    GetAlunosConfirmadosNaAula,
    DeleteAlunoDaAulaUser,
    DeleteAulaPeloId,
} from '../services/Aulas.service';
import Button_ from '../components/Button_';

const AulaDetalhe = ({route}) => {
    const {item} = route.params;
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const {id} = useUser();
    const {name} = useUser();
    const {rule} = useUser();
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        GetAlunosConfirmadosNaAula(item.id).then((resp) => {
            setAlunos(resp);
        });
    }, [isFocused]);

    const renderAluno = ({item}) => (
        <View style={styles.row}>
            <View>
                <Text style={styles.cardTitle}> {item.userName} </Text>
            </View>
        </View>
    );

    const handleDesmarcar = () => {
        DeleteAlunoDaAulaUser(item.identificadorAulaUser).then(() => {
            Alert.alert('Sucesso!', 'Agendamento cancelado!', [
                {text: 'OK', onPress: () => navigation.goBack()},
            ]);
        });
    };

    const handleCheckIn = () => {
        if (item.qtdeAtualAlunos >= item.qtdeMaxAlunos)
            Alert.alert(
                'Lotado! Capacidade máxima atingida. Fique atento se houver desistência ou agende para outro horário.',
            );
        else {
            AgendarAlunoNaAula({
                aulaId: item.id,
                userId: id,
                userName: name,
            }).then((res) => {
                if (res) {
                    Alert.alert('Sucesso!', 'Agendamento realizado!', [
                        {text: 'OK', onPress: () => navigation.goBack()},
                    ]);
                } else Alert.alert('Falha!', 'Não agendado!');
            });
        }
    };

    const handleCancelarAula = () => {
        DeleteAulaPeloId(item.id).then((res) => {
            if (res) {
                Alert.alert('Sucesso!', 'Aula cancelada!', [
                    {text: 'OK', onPress: () => navigation.goBack()},
                ]);
            } else {
                Alert.alert('Falha!', 'Aula não cancelada!');
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Card style={styles.cardTop}>
                    <Card.Title
                        titleStyle={styles.screenLabel}
                        title={'Alunos confirmados'}
                    />
                </Card>
            </View>
            <View
                style={{
                    marginBottom: 30,
                }}
            >
                <Card style={styles.card}>
                    <View>
                        <View>
                            <Text style={styles.cardTitle}>Instrutor</Text>
                            <Text style={styles.cardText}>
                                {item.instrutorName}
                            </Text>
                        </View>
                        <View style={{...styles.rowAlt, marginBottom: 15}}>
                            <View>
                                <Text style={styles.cardTitle}>Data</Text>
                                <Text style={styles.cardText}>{item.data}</Text>
                            </View>
                            <View>
                                <Text style={styles.cardTitle}>Horário</Text>
                                <Text style={styles.cardText}>{item.hora}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.cardText}>Alunos</Text>
                        <View style={styles.card}>
                            <FlatList
                                data={alunos}
                                renderItem={renderAluno}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </View>
                </Card>
            </View>

            <View style={styles.buttonContainer}>
                {rule == 'admin' ? (
                    <Button_ onPress={handleCancelarAula}>
                        Cancelar aula
                    </Button_>
                ) : item.identificadorAulaUser == 0 ? (
                    <Button_ onPress={handleCheckIn}>Fazer Check-in</Button_>
                ) : (
                    <Button_ onPress={handleDesmarcar}>Desmarcar</Button_>
                )}

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
    cardTop: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        height: 90,
    },
    screenLabel: {
        alignSelf: 'center',
        fontSize: 24,
    },
    card: {
        flexBasis: 'auto',
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    cardText: {
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rowAlt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e5e5e5',
    },
    textIcon: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
    },
    cardTitle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#7c7c7c',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        color: '#666666',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

import React, {useState, useEffect} from 'react';
import {Card} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import Input from '../components/Input';
import Button_ from '../components/Button_';
import {insertAulas} from '../services/CrossFitMeServicesDB';

import {useNavigation} from '@react-navigation/native';

const CadastroAula = ({route}) => {
    const navigation = useNavigation();
    const {item} = route.params ? route.params : {};
    const [data, setData] = useState(null);
    const [hora, setHora] = useState(null);
    const [qtd, setQtd] = useState(null);
    const [descricao, setDescricao] = useState(null);

    useEffect(() => {
        if (item) {
            setData(item.data);
            setHora(item.hora);
            setDescricao(item.descricao);
            setQtd(item.qtd);
        }
    }, [item]);

    const handleSalvar = async () => {
        await insertAulas({
            data: data,
            hora: hora,
            descricao: descricao,
            qtd: qtd,
        });

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Title
                        titleStyle={styles.cardTitle}
                        title={'Cadastro de Aula'}
                    />
                </Card>
            </View>
            <View style={{flex: 2}}>
                <View style={styles.inputContainer}>
                    <Input
                        style={{height: 50}}
                        label='Data'
                        value={data}
                        onChangeText={(text) => setData(text)}
                    />
                    <Input
                        type
                        style={{height: 50}}
                        label='Hora'
                        value={hora}
                        onChangeText={(text) => setHora(text)}
                    />
                    <Input
                        type
                        style={{height: 50}}
                        label='Quantidade de alunos'
                        value={qtd}
                        onChangeText={(text) => setQtd(text)}
                    />
                    <Input
                        multiline={true}
                        style={{height: 150}}
                        label='Descrição da aula'
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button_ onPress={handleSalvar}>Salvar</Button_>
                    <Button_>Cancelar</Button_>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 30,
        flex: 1,
    },
    cardContainer: {flex: 1, marginTop: 15},
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
    inputContainer: {marginBottom: 30},
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default CadastroAula;

import React, { useState, useEffect } from 'react';
import { Card, TextInput } from 'react-native-paper';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import Button_ from '../components/Button_';
import { CadastrarAula } from '../services/Aulas.service';
import { useUser } from '../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const CadastroAula = () => {
    const navigation = useNavigation();

    const [show, setShow] = useState(false);
    const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));
    const [showTime, setShowTime] = useState(false);
    const [hora, setHora] = useState();
    const [qtd, setQtd] = useState();
    const [descricao, setDescricao] = useState();
    const { id } = useUser();
    const { name } = useUser();

    const handleSalvar = () => {
        CadastrarAula({
            instrutorId: id,
            instrutorName: name,
            data: data,
            hora: hora,
            qtdeMaxAlunos: qtd,
            descricao: descricao,
            identificadorAulaUser: 0,
            qtdeAtualAlunos: 0,
        }).then((res) => {
            if (res) {
                Alert.alert('Sucesso!', 'Aula Cadastrada com sucesso!', [
                    { text: 'OK', onPress: () => navigation.goBack() },
                ]);
            } else {
                Alert.alert('Falha!', 'Aula não cadastrada!');
            }
        });
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
            <View style={{ flex: 2 }}>
                <View style={styles.inputContainer}>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onTouchCancel={() => setShow(false)}
                            onChange={(event, date) => {
                                setShow(false);
                                setData(moment(date).format('DD/MM/YYYY'));
                            }}
                        />
                    )}

                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Input
                            label="Data"
                            value={data}
                            left={<TextInput.Icon name="calendar" />}
                            editable={false}
                        />
                    </TouchableOpacity>

                    {showTime && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            locale="pt-BR"
                            value={new Date()}
                            mode={'time'}
                            is24Hour={true}
                            display="default"
                            onTouchCancel={() => setShowTime(false)}
                            onChange={(event, time) => {
                                setShowTime(false); 
                                setHora(time.toTimeString().substring(0,5));
                            }}
                        />
                    )}

                    <TouchableOpacity onPress={() => setShowTime(true)}>
                        <Input
                            label="Hora"
                            value={hora}
                            left={<TextInput.Icon name="clock" />}
                            editable={false}
                        />
                    </TouchableOpacity>

                    <Input
                        type
                        style={{ height: 50 }}
                        label='Quantidade de alunos'
                        keyboardType='numeric'
                        value={qtd}
                        onChangeText={(text) => setQtd(text)}
                    />
                    <Input
                        multiline={true}
                        style={{ height: 150 }}
                        label='Descrição da aula'
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button_ onPress={handleSalvar}>Salvar</Button_>
                    <Button_ onPress={() => navigation.goBack()}>
                        Cancelar
                    </Button_>
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
    cardContainer: { flex: 1, marginTop: 15 },
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
    inputContainer: { marginBottom: 30 },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default CadastroAula;

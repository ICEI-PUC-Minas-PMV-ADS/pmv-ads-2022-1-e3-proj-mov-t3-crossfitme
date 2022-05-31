import React, { useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Button_ from '../components/Button_';
import Input from '../components/Input';
import { register } from '../services/Auth.service';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const Cadastro = () => {

    const navigation = useNavigation();

    const [show, setShow] = useState(false);
    const [dataNascimento, setDataNascimento] = useState(moment(new Date()).format('DD/MM/YYYY'));
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleRegister = () => {
        register({
            name: nome,
            email: email,
            password: senha,
            rule: 'aluno',
            endereco: endereco,
            nascimento: dataNascimento,
            desde: moment(new Date()).format('DD/MM/YYYY'),
        }).then((res) => {
            console.log(res);

            if (res) {
                Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!', [
                    { text: 'OK', onPress: () => navigation.goBack() },
                ]);
            } else {
                Alert.alert('Atenção', 'Usuário não cadastrado!');
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CrossFitMe</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Cadastro</Text>
           
                <Input
                    style={{ height: 50 }}
                    label='Nome'
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />

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
                            setDataNascimento(moment(date).format('DD/MM/YYYY'));
                        }}
                    />
                )}

                <TouchableOpacity onPress={() => setShow(true)}>
                    <Input
                        label="Data Nascimento"
                        value={dataNascimento}
                        left={<TextInput.Icon name="calendar" />}
                        editable={false}
                    />
                </TouchableOpacity>

                <Input
                    style={{ height: 50 }}
                    label='Endereço'
                    value={endereco}
                    onChangeText={(text) => setEndereco(text)}
                />
                <Input
                    style={{ height: 50 }}
                    label='E-mail'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    style={{ height: 50 }}
                    label='Senha'
                    value={senha}
                    secureTextEntry
                    onChangeText={(text) => setSenha(text)}
                />
                <View style={styles.button}>
                    <Button_ onPress={handleRegister}>Cadastrar</Button_>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ marginRight: 5, fontSize: 16 }}>
                        Já possui uma conta?
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Poppins-SemiBold',
                            fontSize: 16,
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        Fazer login
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Cadastro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 46,
        textAlign: 'center',
        marginBottom: 60,
        marginTop: 60,
    },
    subtitle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
});

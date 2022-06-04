import React, { useState, useEffect } from 'react';
import { Text } from 'react-native-paper';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button_ from '../components/Button_';
import TextButton from '../components/TextButton';
import Input from '../components/Input';
import { login } from '../services/Auth.service';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken, insertToken } from '../services/CrossFitMeServicesDB';

const Login = () => {
    const navigation = useNavigation();
    const {
        setSigned,
        setName,
        setmail,
        setNascimento,
        setEndereco,
        setDate,
        setRule,
        setId,
    } = useUser();
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');

    useEffect(() => {
        getToken().then((res) => {
            if (res !== undefined) {
                setName(res.nome);
                setmail(res.email);
                setNascimento(res.nascimento);
                setEndereco(res.endereco);
                setDate(res.desde);
                setRule(res.rule);
                setId(res.user_id);
                AsyncStorage.setItem('@TOKEN_KEY', res.token)
                    .then(() => setSigned(true))
                    .catch((error) => { });
            }
        });
    }, []);

    const handleLogin = () => {
        login({
            email: email,
            password: password,
        }).then((res) => {
            console.log(res);
            if (res && res.user) {
                setSigned(true);
                setName(res.user.name);
                setmail(res.user.email);
                setNascimento(res.user.nascimento);
                setEndereco(res.user.endereco);
                setDate(res.user.desde);
                setRule(res.user.rule);
                setId(res.user.id);
                insertToken(res);
                AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
            } else {
                Alert.alert('Atenção', 'Usuário ou senha inválidos!');
            }
        });
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>CrossFitMe</Text>
            <Input
                label='E-mail'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Input
                label='Senha'
                secureTextEntry
                value={password}
                onChangeText={(text) => setSenha(text)}
            />
            <View style={styles.button}>
                <Button_ mode='contained' onPress={handleLogin}>
                    LOGIN
                </Button_>
            </View>
            <Text
                style={{
                    textAlign: 'center',
                    marginBottom: 30,
                    fontSize: 16,
                }}
            >
                Esqueceu sua senha?
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ marginRight: 5, fontSize: 16 }}>
                    Não tem uma conta?
                </Text>
                <TextButton onPress={() => navigation.navigate('Cadastro')}>
                    Cadastre-se
                </TextButton>

            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 30,
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 46,
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 30,
    },
});

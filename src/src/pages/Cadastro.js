import * as React from 'react';
import {Text} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import Button_ from '../components/Button_';
import Input from '../components/Input';

const Login = () => {
    const [nome, setNome] = React.useState('');
    const [nascimento, setNascimento] = React.useState('');
    const [endereco, setEndereco] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CrossFitMe</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Cadastro</Text>
                <Input
                    style={{height: 50}}
                    label='Nome'
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />
                <Input
                    style={{height: 50}}
                    label='Data de Nascimento'
                    value={nascimento}
                    onChangeText={(text) => setNascimento(text)}
                />
                <Input
                    style={{height: 50}}
                    label='Endereço'
                    value={endereco}
                    onChangeText={(text) => setEndereco(text)}
                />
                <Input
                    style={{height: 50}}
                    label='E-mail'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    style={{height: 50}}
                    label='Senha'
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />
                <View style={styles.button}>
                    <Button_>Cadastrar</Button_>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{marginRight: 5, fontSize: 16}}>
                        Já possui uma conta?
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Poppins-SemiBold',
                            fontSize: 16,
                        }}
                    >
                        Fazer login
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Login;

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

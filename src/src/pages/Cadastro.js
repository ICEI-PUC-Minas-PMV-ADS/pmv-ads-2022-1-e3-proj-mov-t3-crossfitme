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
                    label='Nome'
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />
                <Input
                    label='Data de Nascimento'
                    value={nascimento}
                    onChangeText={(text) => setNascimento(text)}
                />
                <Input
                    label='Endereço'
                    value={endereco}
                    onChangeText={(text) => setEndereco(text)}
                />
                <Input
                    label='E-mail'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    label='Senha'
                    value={senha}
                    onChangeText={(text) => setPassword(text)}
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
                        Já possuí uma conta?
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
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 46,
        textAlign: 'center',
        marginTop: 30,
        flex: 1,
    },
    subtitle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        flex: 3,
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 30,
    },
});

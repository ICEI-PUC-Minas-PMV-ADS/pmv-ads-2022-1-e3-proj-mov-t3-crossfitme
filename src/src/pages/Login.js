import * as React from 'react';
import {Text, TextInput} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button_ from '../components/Button_';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CrossFitMe</Text>
            <TextInput
                mode='outlined'
                outlineColor='#fafafa'
                activeOutlineColor='#747474'
                label='E-mail'
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
            />
            <TextInput
                mode='outlined'
                outlineColor='#fafafa'
                activeOutlineColor='#747474'
                label='Senha'
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
            />
            <View style={styles.button}>
                <Button_ onPress={() => navigation.navigate('Navigation')}>
                    Entrar
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
                }}
            >
                <Text style={{marginRight: 5, fontSize: 16}}>
                    Não tem uma conta?
                </Text>
                <Text
                    style={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 16,
                    }}
                >
                    Cadastre-se
                </Text>
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
    input: {
        backgroundColor: '#eeeeee',
        height: 50,
        marginBottom: 15,
    },
    button: {
        alignItems: 'center',
        marginBottom: 30,
    },
});

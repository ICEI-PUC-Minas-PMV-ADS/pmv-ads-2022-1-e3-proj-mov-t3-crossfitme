import React, { useState } from 'react';
import {Text} from 'react-native-paper';
import {View, StyleSheet, Alert} from 'react-native';
import Button_ from '../components/Button_';
import Input from '../components/Input';
import { register } from '../services/Auth.service';


const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleRegister = () => {
        register({
            name: nome,
            email: email,
            password: senha,
            rule: "aluno", 
            endereco: endereco,
            nascimento: nascimento

        }).then(res => {
          console.log(res);
    
          if (res) {
    
            Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!')
    
          } else {
    
            Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
          }
    
        });
      }

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
                    onChangeText={(text) => setSenha(text)}
                />
                <View style={styles.button}>
                    <Button_ onPress = { handleRegister }>Cadastrar</Button_>
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

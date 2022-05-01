import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import { View, StyleSheet, Alert, ScrollView, SafeAreaView } from 'react-native';
import Input from '../components/Input';
import Button_ from '../components/Button_';
import { useUser } from '../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';
import { CriarRelatorio } from '../services/relatoriofisico.service';
import moment from 'moment';

const CadastroAvaliacao = () => {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const [idade, setIdade] = useState();
    const [classificacao, setClassificacao] = useState();
    const [massaGorda, setMassaGorda] = useState();
    const [massaMagra, setMassaMagra] = useState();
    const [alunoId, setAlunoId] = useState();
    const [email, setEmail] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState();
    const [gordura, setGordura] = useState();
    const { id } = useUser();

    const handleSalvar = () => {

        CriarRelatorio({
            instrutorId: id,
            alunoId: alunoId,
            name: name,
            idade: idade,
            classificacao: classificacao,
            email: email,
            data: moment(new Date()).format('DD/MM/YYYY'),
            peso: peso,
            altura: altura,
            imc: imc,
            gordura: gordura,
            massaGorda: massaGorda,
            massaMagra: massaMagra,
        }).then(res => {
            console.log(res);

            if (res) {

                Alert.alert('Sucesso!', 'Relatório Físico Cadastrado com sucesso!', [
                    { text: "OK", onPress: () => navigation.goBack() }
                ]);

            } else {

                Alert.alert('Falha!', 'Relatório Físico não cadastrado!');
            }

        });

    };

    return (
        <SafeAreaView>
        <ScrollView >
            <View style={styles.container}>


                <View style={styles.cardContainer}>
                    <Card style={styles.card}>
                        <Card.Title
                            titleStyle={styles.cardTitle}
                            title={'Cadastro de Avaliação Física'}
                        />
                    </Card>
                </View>




               {/* <Body> */}
                <View style={styles.inputContainer}>



                    <View >
                        <Card style={styles.title}>

                            <Card.Title
                                title={'Dados do Aluno:'}
                            />
                        </Card>
                    </View>



                    <Input
                        style={{ height: 50 }}
                        label='Nome'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Input
                        style={{ height: 50 }}
                        label='Identificador'
                        value={alunoId}
                        keyboardType='numeric'
                        onChangeText={(text) => setAlunoId(text)}
                    />
                    <Input
                        style={{ height: 50 }}
                        label='idade'
                        value={idade}
                        keyboardType='numeric'
                        onChangeText={(text) => setIdade(text)}
                    />
                    <Input
                        style={{ height: 50 }}
                        label='E-mail'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <Input
                        type
                        style={{ height: 50 }}
                        label='Peso'
                        value={peso}
                        keyboardType='numeric'
                        onChangeText={(text) => setPeso(text)}
                    />
                    <Input
                        type
                        style={{ height: 50 }}
                        label='Altura'
                        value={altura}
                        keyboardType='number-pad'
                        onChangeText={(text) => setAltura(text)}
                    />
                    <Input
                        type
                        style={{ height: 50 }}
                        label='Imc Calculado'
                        value={imc}
                        keyboardType='number-pad'
                        onChangeText={(text) => setImc(text)}
                    />
                    <Input
                        style={{ height: 50 }}
                        label='Massa Gorda'
                        value={massaGorda}
                        keyboardType='numeric'
                        onChangeText={(text) => setMassaGorda(text)}
                    />

                    <Input
                        style={{ height: 50 }}
                        label='Massa Magra'
                        value={massaMagra}
                        keyboardType='numeric'
                        onChangeText={(text) => setMassaMagra(text)}
                    />
                    <Input
                        type
                        style={{ height: 50 }}
                        label='Percentual de Gordura'
                        value={gordura}
                        onChangeText={(text) => setGordura(text)}
                    />
                    <Input
                        type
                        style={{ height: 50 }}
                        label='Classificação'
                        value={classificacao}
                        onChangeText={(text) => setClassificacao(text)}
                    />

                </View>
                <View style={styles.buttonContainer}>
                    <Button_ onPress={handleSalvar}>Salvar</Button_>
                    <Button_ onPress={() => navigation.goBack()}>
                        Cancelar
                    </Button_>
                </View>

            </View>
            </ScrollView>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     margin: 30,
    //     flex: 1,
    // },
    cardContainer: { flex: 1, marginTop: 1 },
    card: {
        backgroundColor: '#ffffff',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },
    cardTitle: {
        // alignSelf: 'center',
        // fontSize: 24,
    },
    inputContainer: { padding: 8 },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        padding: 24,
        //backgroundColor: "#eaeaea"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default CadastroAvaliacao;

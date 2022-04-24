import React, {useState, useEffect} from 'react';
import {Card} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

import Input from '../components/Input';
import Button_ from '../components/Button_';

import {useNavigation} from '@react-navigation/native';

const CadastroAvaliacao = ({route}) => {
    const navigation = useNavigation();
    const {item} = route.params ? route.params : {};
    const [data, setData] = useState(null);
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(null);
    const [gordura, setGordura] = useState(null);

    useEffect(() => {
        if (item) {
            setData(item.data);
            setPeso(item.peso);
            setAltura(item.altura);
            setImc(item.imc);
        }
    }, [item]);

    const handleSalvar = async () => {
        await insertAulas({
            data: data,
            peso: peso,
            altura: altura,
            imc: imc,
            gordura: gordura,
        });

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Title
                        titleStyle={styles.cardTitle}
                        title={'Cadastro de Avaliação'}
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
                        label='Peso'
                        value={peso}
                        onChangeText={(text) => setPeso(text)}
                    />
                    <Input
                        type
                        style={{height: 50}}
                        label='Altura'
                        value={altura}
                        onChangeText={(text) => setAltura(text)}
                    />
                    <Input
                        type
                        style={{height: 50}}
                        label='Imc'
                        value={imc}
                        onChangeText={(text) => setImc(text)}
                    />
                    <Input
                        type
                        style={{height: 50}}
                        label='Percentual de gordura'
                        value={gordura}
                        onChangeText={(text) => setGordura(text)}
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

export default CadastroAvaliacao;

import * as React from 'react';
import { Text, Card } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';



const RepeatedView = (props) => {
    return (
        <View style>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.cardText}>{props.content}</Text>
        </View>
    );
};

const EvaluationCard = (props) => {
    const nome = props.data.name;
    const idade = props.data.idade;
    const peso = props.data.peso;
    const altura = props.data.altura;
    const imc = props.data.imc;
    const data = props.data.data;
    const percentual = props.data.gordura;
    const classificacao = props.data.classificacao;
    const massaMagra = props.data.massaMagra;
    const massaGorda = props.data.massaGorda;

    const personalInfo = { Idade: idade, Peso: peso, Altura: altura, Imc: imc };
    const resultsInfo = { 'Percentual de Gordura': percentual, Classificação: classificacao };
    const massInfo = { 'Massa Magra': massaMagra, 'Massa Gorda': massaGorda };
   
    return (
        <Card style={styles.card}>
            <View>
                <RepeatedView title='Data do Relatório' content={data} />
                <View style={styles.rowAlt}>
                    {Object.keys(personalInfo).map((key) => {
                        return (
                            <RepeatedView
                                key={key}
                                title={key}
                                content={personalInfo[key]}
                            />
                        );
                    })}
                </View>
                <View style={styles.row}>
                    {Object.keys(resultsInfo).map((key) => {
                        return (
                            <RepeatedView
                                key={key}
                                title={key}
                                content={resultsInfo[key]}
                            />
                        );
                    })}
                </View>
                <View style={styles.rowAlt}>
                    {Object.keys(massInfo).map((key) => {
                        return (
                            <RepeatedView
                                key={key}
                                title={key}
                                content={massInfo[key]}
                            />
                        );
                    })}
                </View>
            </View>
        </Card>);
}




export default EvaluationCard;

const styles = StyleSheet.create({
    card: {
        flexBasis: 'auto',
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    cardText: {
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rowAlt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e5e5e5',
    },
    textIcon: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
    },
    cardTitle: {
        fontSize: 16,
        color: '#7c7c7c',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        color: '#666666',
    },
});
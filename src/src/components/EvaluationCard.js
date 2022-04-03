import * as React from 'react';
import {Text, Card} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

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

const personalInfo = {Idade: '30', Peso: '80', Altura: '1,80', Imc: '80'};
const resultsInfo = {'Percentual de Gordura': '14,4', Classificação: 'Bom'};
const massInfo = {'Massa Magra': 69, 'Massa Gorda': 11};

const RepeatedView = (props) => {
    return (
        <View style>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.cardText}>{props.content}</Text>
        </View>
    );
};

const EvaluationCard = (props) => (
    <Card style={styles.card}>
        <View>
            <RepeatedView title='Data' content='11/06/2022' />
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
    </Card>
);

export default EvaluationCard;

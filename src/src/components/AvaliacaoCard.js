import {Text, Card} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

import FloatingIcon from './FloatingIcon';

import {useNavigation} from '@react-navigation/native';

const AvaliacaoCard = (props) => {
    const navigation = useNavigation();
    return (
        <Card
            onPress={() => navigation.navigate('RelatorioAvaliacao')}
            style={styles.card}
        >
            <View style={{margin: 15}}>
                <View
                    style={{
                        ...styles.row,
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={styles.row}>
                        <FloatingIcon name={'calendar-month'} />
                        <Text style={styles.textIcon}>{props.data}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textIcon}>{props.nome}</Text>
                    </View>
                </View>
            </View>
        </Card>
    );
};

export default AvaliacaoCard;

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
    cardTitle: {
        alignSelf: 'center',
        fontSize: 24,
    },
    row: {
        flexDirection: 'row',
    },
    textIcon: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
    },
    cardText: {
        fontSize: 16,
        color: '#7c7c7c',
        marginTop: 15,
        marginBottom: 20,
    },
});

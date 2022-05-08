import { Text, Card, FAB } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import FloatingIcon from './FloatingIcon';
import Button_ from './Button_';

const ClassCard = (props ) => {

    return (

        <Card 
        style={styles.card}
        {...props}>

            <View style={{ margin: 15 }}>
                <View
                    style={{
                        ...styles.row,
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={styles.row}>
                        <FloatingIcon name={'clock-outline'} />
                        <Text style={styles.textIcon}>{props.time}</Text>
                    </View>
                    <View style={styles.row}>
                        <FloatingIcon name={'account-multiple-outline'} />
                        <Text style={styles.textIcon}>{props.qtd}</Text>
                    </View>
                </View>
                <View>
                  <Text>{props.children}</Text> 
                </View>

            </View>
        </Card>
    );
};

export default ClassCard;

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

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Input from '../components/Input';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import ProfileCard from '../components/ProfileCard';
import FloatingIcon from '../components/FloatingIcon';
import ClassCard from '../components/ClassCard';
import FloatingButton from '../components/FloatingButton';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';
import { GetTBLAulas, GetTBLAulaUser } from '../services/Aulas.service';

const Aulas = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const { name } = useUser();
    const { id } = useUser();
    const { rule } = useUser();
    const [aulas, setAulas] = useState([]);
    const [aulasUsers, setAulaUser] = useState([]);

    const [show, setShow] = useState(false);
    const [filtroData, setFiltroData] = useState();

    useEffect(() => {
        setFiltroData(null);
        GetTBLAulas(null).then(resp => { console.log(resp), setAulas(resp) });
        GetTBLAulaUser().then(resp => { setAulaUser(resp) })
    }, [isFocused]);


    const renderItem = ({ item }) => {
        if(item == null) return;

        var contador = 0;
        aulasUsers.forEach(aulauser => {
            if (aulauser.aulaId == item.id)
                contador++;

            if (aulauser.aulaId == item.id && aulauser.userId == id)
                item.identificadorAulaUser = aulauser.id;
            else { item.identificadorAulaUser = 0 }
        });
        item.qtdeAtualAlunos = contador;


        return (
            <ClassCard
                qtd={item.qtdeAtualAlunos + '/' + item.qtdeMaxAlunos}
                time={item.hora}
                onPress={() => navigation.navigate('AulaDetalhe', { item: item })}
            >
                {item.descricao}
            </ClassCard>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 30, marginTop: 15 }}>
                <ProfileCard
                    name={name}
                    source={require('../../assets/img/profile.jpg')}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <FloatingIcon name={'map-marker-outline'} />
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 22 }}>
                    Academia Fitness
                </Text>
            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onTouchCancel={() => setShow(false)}
            
                    onChange={(event, date) => {
                        setShow(false);
                        GetTBLAulas(moment(date).format('DD/MM/YYYY')).then(resp => { console.log(resp), setAulas(resp) });
                        setFiltroData(moment(date).format('DD/MM/YYYY'));
                    }}
                    
                />
            )}
            <TouchableOpacity onPress={() => setShow(true)}>
                <Input
                    label="Selecione data desejada"
                    value={filtroData}
                    left={<TextInput.Icon name="calendar" />}
                    editable={false}
                />
            </TouchableOpacity>

            <View style={styles.flatList}>
                <FlatList
                    data={aulas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {rule == 'aluno' ? null : (
                <FloatingButton
                    onPress={() => navigation.navigate('CadastroAula')}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15,
        flexGrow: 1,
        flex: 1,
    },
    flatList: {
        flexGrow: 1,
        flex: 1,
    },
});
export default Aulas;

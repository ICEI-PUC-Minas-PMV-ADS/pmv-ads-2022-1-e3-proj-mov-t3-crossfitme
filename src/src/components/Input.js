import * as React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const Input = (props) => {
    return (
        <TextInput
            mode='outlined'
            outlineColor='#fafafa'
            activeOutlineColor='#747474'
            label={props.label}
            style={(styles.input, props.style)}
            multiline={props.multiline}
            onChangeText={props.onChangeText}
        />
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eeeeee',
        marginBottom: 15,
    },
});

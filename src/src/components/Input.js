import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

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
          {...props}          
        />

  );
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eeeeee',
        marginBottom: 15,
    },
});

export default Input;

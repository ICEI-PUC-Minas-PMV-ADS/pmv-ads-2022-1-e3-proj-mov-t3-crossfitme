import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {

  return (

        <TextInput
          style={styles.input}
         // keyboardType = {'decimal-pad'}
          {...props}          
        />

  );
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eeeeee',
        height: 50,
        marginBottom: 15,
    },
});

export default Input;

// import * as React from 'react';
// import {StyleSheet} from 'react-native';
// import {TextInput} from 'react-native-paper';

// const Input = (props) => {
//     return (
//         <TextInput
//             mode='outlined'
//             outlineColor='#fafafa'
//             activeOutlineColor='#747474'
//             label={props.label}
//             style={styles.input}
//         />
//     );
// };

// export default Input;

// const styles = StyleSheet.create({
//     input: {
//         backgroundColor: '#eeeeee',
//         height: 50,
//         marginBottom: 15,
//     },
// });
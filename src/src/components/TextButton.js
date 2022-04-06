import {Button} from 'react-native-paper';

const TextButton = (props) => {
    return (
        <Button
            labelStyle={{
                textTransform: 'none',
                marginTop: 15,
                fontSize: 15,
            }}
            style={{}}
            contentStyle={{}}
            compact
            color='#000000'
            onPress={props.onPress}
        >
            {props.children}
        </Button>
    );
};

export default TextButton;

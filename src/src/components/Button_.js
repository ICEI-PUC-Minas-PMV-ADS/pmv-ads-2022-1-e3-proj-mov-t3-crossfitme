import {Button} from 'react-native-paper';

const Button_ = (props) => {
    return (
        <Button
            mode='contained'
            compact
            color='#000000'
            uppercase
            style={{borderRadius: 8, width: 180}}
            onPress={props.onPress}
        >
            {props.children}
        </Button>
    );
};

export default Button_;

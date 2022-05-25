import {Button} from 'react-native-paper';

const Button_ = (props) => {
    return (
        <Button
            mode='contained'
            compact
            color={props.color ? props.color : '#000000'} //'#000000'
            uppercase
            style={{borderRadius: 8, width: 150}}
            onPress={props.onPress}
            icon={props.icon}
        >
            {props.children}
        </Button>
    );
};

export default Button_;

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function FloatingIcon(props) {
    return (
        <Icon
            name={props.name}
            size={35}
            color='#cccccc'
            style={{marginRight: 5}}
        />
    );
}

export default FloatingIcon;

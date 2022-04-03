import {Image} from 'react-native';

const ProfileImage = (props) => {
    return (
        <Image source={props.source} style={{height: '100%', width: '100%'}} />
    );
};

export default ProfileImage;

import PropTypes from 'prop-types';
import { FriendItem, Status, FriendAvatar, FriendsName } from '../FriendListItem/FriendListItem.styled'


export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <FriendItem>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendsName>{name}</FriendsName>
        </FriendItem>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,

}
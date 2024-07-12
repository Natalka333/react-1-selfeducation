import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import { FriendsContainer, List } from '../FriendListItem/FriendList.styled'

export default function FriendList({ friends }) {
    return (
        <FriendsContainer>
            <List>
                {
                    friends.map(({ avatar, name, id, isOnline }) => (
                        < FriendListItem
                            avatar={avatar}
                            key={id}
                            name={name}
                            isOnline={isOnline}
                        />
                    ))
                }
            </List>
        </FriendsContainer>
    )
}

FriendList.propType = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )

}
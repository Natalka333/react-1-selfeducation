import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import { FriendsContainer, List } from '../FriendListItem/FriendList.styled'

export default function FriendList({ friends }) {
    return (
        <FriendsContainer>
            <List>
                {
                    friends.map(({ avatar, name, id, isOline }) => (
                        < FriendListItem
                            avatar={avatar}
                            key={id}
                            name={name}
                            isOline={isOline}
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
            isOline: PropTypes.bool.isRequired,
        })
    )

}
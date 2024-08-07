import PropTypes from 'prop-types';
import { Container, Description, UserName, Tag, Avatar, Location, Stats, StatsItem, Label, Quantity } from '../Profile/Profile.styled';
import { FaUserAlt, FaMapMarkerAlt, FaTags } from 'react-icons/fa';
import { iconSize } from 'constants/iconSize';


export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <Container>
            <Description>
                <Avatar
                    src={avatar}
                    alt={username}
                />
                <UserName><FaUserAlt size={iconSize.sm} />  {username}</UserName>
                <Tag><FaTags size={iconSize.sm} />  {tag}</Tag>
                <Location><FaMapMarkerAlt size={iconSize.sm} />  {location}</Location>
            </Description>

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsItem>
            </Stats>
        </Container>)
};


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
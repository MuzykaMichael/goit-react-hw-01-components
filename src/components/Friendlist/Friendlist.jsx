import propTypes from 'prop-types'
import {FriendListing,FriendListItem,SpanStatusOnline,SpanStatusOffline,FriendAvatar,FriendName} from './Friendlist.styled';

export const FriendList = ({friends}) => {
    const ItemFriends = friends.map(friend => 
    <FriendListItem key={friend.id}>{friend.isOnline === true?<SpanStatusOnline></SpanStatusOnline>:<SpanStatusOffline></SpanStatusOffline>}
    <FriendAvatar src={friend.avatar} alt="User avatar" width="48"></FriendAvatar><FriendName>{friend.name}</FriendName></FriendListItem>)
    return (
        <FriendListing>
            {ItemFriends}
        </FriendListing>
    )
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired,
        }).isRequired
    ).isRequired
}
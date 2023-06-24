import propTypes from 'prop-types'
import {FriendListing} from './Friendlist.styled';
import {FriendListItem} from 'components/FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <FriendListing>
            {friends.map(({avatar,name,isOnline,id})=>(
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))}
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
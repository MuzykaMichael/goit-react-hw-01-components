import propTypes from 'prop-types'
import {FriendListLi,SpanStatusOnline,SpanStatusOffline,FriendAvatar,FriendName} from 'components/Friendlist/Friendlist.styled'

export const FriendListItem = ({avatar,name,isOnline}) => 
<FriendListLi>{isOnline === true?<SpanStatusOnline></SpanStatusOnline>:<SpanStatusOffline></SpanStatusOffline>}
        <FriendAvatar src={avatar} alt="User avatar" width="48"></FriendAvatar><FriendName>{name}</FriendName></FriendListLi>


FriendListItem.propTypes = {
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
}
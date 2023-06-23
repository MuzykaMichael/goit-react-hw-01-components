import {ProfileContainer, ProfileDescription, ProfileImage,ProfileLocation,ProfileName,ProfileTag,StatsList,StatsListItem,StatsLabel,StatsQuantity} from './Profile.styled.jsx'

export const Profile = ({username,tag,location,avatar,stats}) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileImage src={avatar} alt="User avatar"/>
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>
      <StatsList>
        <StatsListItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsListItem>
      </StatsList>
    </ProfileContainer>
  )
}



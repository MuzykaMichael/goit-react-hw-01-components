import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    width: 200px;
    background-color: black;
    margin: 0 auto 20px;
`;

export const ProfileDescription = styled.div`
    width:150px;
    background-color: black;
    padding: 15px;
`;

export const ProfileImage = styled.img`
    max-width:150px;
    display:block;
    height:auto;
`;

export const ProfileName = styled.p`
    color:white;
`;

export const ProfileTag = styled.p`
    color:white;
`;

export const ProfileLocation = styled.p`
    color:white;
`;

export const StatsList = styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:column;
    padding-left:0px;
`;

export const StatsListItem = styled.li`
    display:flex;
    justify-content: space-between;
`;

export const StatsLabel = styled.span`
    color: white;
`;

export const StatsQuantity = styled.span`
    color:white;
`;

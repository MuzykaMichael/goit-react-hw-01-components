import styled from '@emotion/styled';

export const FriendListing = styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap: 10px;
`;

export const FriendListLi = styled.li`
    display:flex;
    gap:20px;
    border:2px solid black;
    max-width:200px;
    padding: 10px 0;
`;

export const SpanStatusOnline = styled.span`
    background-color: green;
    width:10px;
    height:10px;
    border-radius:50%;
    position:relative;
    top:22px;
    left:5px;
`;

export const SpanStatusOffline = styled.span`
    background-color: red;
    width:10px;
    height:10px;
    border-radius:50%;
    margin: 0;
    position:relative;
    top:22px;
    left:5px;
`;

export const FriendAvatar = styled.img`
    display:block;
`;

export const FriendName = styled.p`

`;
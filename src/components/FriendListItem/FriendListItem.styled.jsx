import styled from '@emotion/styled';
import { css } from '@emotion/react';


export const FriendItem = styled.li`
    display: flex;
  align-items: center;
  padding: 15px;
`


const statusStyles = css`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
`;

const onlineStyle = css`
  background-color: green;
`;

const offlineStyle = css`
  background-color: red;
`;

export const Status = styled.span`
    width: 30px;
  height: 30px;
  margin-right: 20px;
  ${statusStyles}
  ${({ isOnline }) => (isOnline ? onlineStyle : offlineStyle)}
`

export const FriendAvatar = styled.img`
  width: 100px;
  margin-right: 10px;
`

export const FriendsName = styled.p`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 15px;
`

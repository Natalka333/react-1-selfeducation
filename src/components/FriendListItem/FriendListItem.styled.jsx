import styled from '@emotion/styled';

export const FriendItem = styled.li`
    display: flex;
  align-items: center;
  padding: 15px;
`

export const Status = styled.span`
    width: 30px;
  height: 30px;
  margin-right: 20px;
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
// const setColor = (props) => {
//   props.friendOnline ? background-color: green : background-color: red;
// }
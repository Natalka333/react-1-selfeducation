import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`
export const Description = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
`
export const Avatar = styled.img`
    margin-bottom: 10px;
  width: 300px;
`


export const UserName = styled.p`
margin-bottom: 5px;
  font-weight: bold;
  font-size: 30px;
`
// export const FaUserAlt = styled.i`
//   size: 16px;
// `

export const Tag = styled.p`
 margin-bottom: 15px;
  font-size: 18px;
`
export const Location = styled.p`
    margin-bottom: 15px;
  font-size: 24px;
  font-weight: 600;
`
export const Stats = styled.ul`
    margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
`
export const StatsItem = styled.li`
     display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`
export const Label = styled.span`
color: black;
  font-size: 18px;`

export const Quantity = styled.span`
    font-size: 16px;
  font-weight: 700;
`
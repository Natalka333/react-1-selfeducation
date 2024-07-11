import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`
export const Title = styled.h2`
    font-size: 30px;
    margin-bottom: 10px;
`

export const StatList = styled.ul`
  width: 370px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: inherit;
  align-items: center;

`
export const LabelStats = styled.span`
     font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
`
export const PercentageStats = styled.span`
     font-weight: 700;
     font-style: 20px;
`
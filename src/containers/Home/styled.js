import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: calc(100vh - 60px);
  background: rgba(250, 251, 253, 0.7);
`
export const BalanceBar = styled.div`
  padding: 20px 10px;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background: white;
  box-shadow: 0px 4px 7px -2px #686868;
`

export const HomeContent = styled.div`
  padding-top: 30px;
`

export const HomeSubtitle = styled.div`
  font-size: 20px;
  color: #9d9d9d;
  text-align: center;
  margin-top: 10px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-between;
  align-items: center;
`
export const CardsError = styled.div`
  text-align: center;
  color: red;
  margin-top: 10px;
  font-weight: 600;
`

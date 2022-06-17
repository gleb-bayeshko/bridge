import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.reversed ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
`
